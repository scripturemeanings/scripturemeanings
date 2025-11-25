import { neon } from '@neondatabase/serverless';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Initialize Neon database connection
const sql = neon(process.env.DATABASE_URL!);

// Initialize Nodemailer transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const postSlug = searchParams.get('post_slug');

    if (!postSlug) {
      return NextResponse.json(
        { error: 'post_slug query parameter is required' },
        { status: 400 }
      );
    }

    // Fetch all approved comments for the given post_slug
    const comments = await sql`
      SELECT 
        id,
        post_slug,
        author_name,
        author_email,
        comment_text,
        approved,
        created_at
      FROM comments
      WHERE post_slug = ${postSlug} AND approved = true
      ORDER BY created_at ASC
    `;

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch comments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { post_slug, author_name, author_email, comment_text } = body;

    // Validate required fields
    if (!post_slug || !author_name || !author_email || !comment_text) {
      return NextResponse.json(
        { error: 'Missing required fields: post_slug, author_name, author_email, comment_text' },
        { status: 400 }
      );
    }

    // Validate email format (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(author_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Insert new comment with approved=false
    const result = await sql`
      INSERT INTO comments (post_slug, author_name, author_email, comment_text, approved, created_at)
      VALUES (${post_slug}, ${author_name}, ${author_email}, ${comment_text}, false, NOW())
      RETURNING id, post_slug, author_name, author_email, comment_text, approved, created_at
    `;

    // Send email notification using Nodemailer
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      console.log('Sending comment notification email via Nodemailer...');
      const adminLink = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://scripturemeanings.com'}/admin/comments`;
      try {
        const mailOptions = {
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER,
          subject: `New Comment on ${post_slug}`,
          html: `
            <h2>New Comment Submitted</h2>
            <p><strong>Post:</strong> ${post_slug}</p>
            <p><strong>Name:</strong> ${author_name}</p>
            <p><strong>Email:</strong> ${author_email}</p>
            <p><strong>Comment:</strong></p>
            <p>${comment_text.replace(/\n/g, '<br/>')}</p>
            <p><a href="${adminLink}" target="_blank" rel="noopener">Review comments in admin panel</a></p>
          `,
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Nodemailer email sent successfully:', info);
      } catch (emailError) {
        console.error('Failed to send Nodemailer email:', emailError);
      }
    } else {
      console.warn('Gmail credentials not configured. Unable to send notification email.');
    }

    return NextResponse.json(
      { 
        message: 'Comment submitted successfully. It will be reviewed before being published.',
        comment: result[0]
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    );
  }
}

