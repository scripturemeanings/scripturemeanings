import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'

const ADMIN_PASSWORD = 'scripturemeanings-admin'

const sql = neon(process.env.DATABASE_URL!)

function isAuthorized(request: NextRequest) {
  const authHeader = request.headers.get('x-admin-secret')
  return authHeader && authHeader === ADMIN_PASSWORD
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const comments = await sql`
      SELECT id, post_slug, author_name, author_email, comment_text, approved, created_at
      FROM comments
      ORDER BY created_at DESC
    `

    return NextResponse.json({ comments }, { status: 200 })
  } catch (error) {
    console.error('Error fetching admin comments:', error)
    return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { action, commentId } = await request.json()

    if (!action || !commentId) {
      return NextResponse.json(
        { error: 'Missing required fields: action, commentId' },
        { status: 400 }
      )
    }

    if (action === 'approve') {
      const result = await sql`
        UPDATE comments
        SET approved = true
        WHERE id = ${commentId}
        RETURNING id, post_slug, author_name, author_email, comment_text, approved, created_at
      `

      if (result.length === 0) {
        return NextResponse.json({ error: 'Comment not found' }, { status: 404 })
      }

      return NextResponse.json({ message: 'Comment approved', comment: result[0] }, { status: 200 })
    }

    if (action === 'delete') {
      const result = await sql`
        DELETE FROM comments
        WHERE id = ${commentId}
        RETURNING id
      `

      if (result.length === 0) {
        return NextResponse.json({ error: 'Comment not found' }, { status: 404 })
      }

      return NextResponse.json({ message: 'Comment deleted' }, { status: 200 })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Error updating admin comments:', error)
    return NextResponse.json({ error: 'Failed to update comment' }, { status: 500 })
  }
}

