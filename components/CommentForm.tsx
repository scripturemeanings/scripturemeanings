'use client'

import { useState, useEffect, FormEvent } from 'react'

interface Comment {
  id: number
  post_slug: string
  author_name: string
  author_email: string
  comment_text: string
  approved: boolean
  created_at: string
}

interface CommentFormProps {
  postSlug: string
}

export default function CommentForm({ postSlug }: CommentFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [error, setError] = useState('')

  // Fetch approved comments on component mount
  useEffect(() => {
    fetchComments()
  }, [postSlug])

  const fetchComments = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/comments?post_slug=${encodeURIComponent(postSlug)}`)
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments || [])
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to load comments')
      }
    } catch (err) {
      console.error('Error fetching comments:', err)
      setError('Failed to load comments')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccessMessage('')

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          post_slug: postSlug,
          author_name: name,
          author_email: email,
          comment_text: commentText,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage(data.message || 'Comment submitted successfully! It will be reviewed before being published.')
        // Clear form
        setName('')
        setEmail('')
        setCommentText('')
        // Refresh comments (though the new one won't show until approved)
        fetchComments()
      } else {
        setError(data.error || 'Failed to submit comment')
      }
    } catch (err) {
      console.error('Error submitting comment:', err)
      setError('Failed to submit comment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="mt-12 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Comments</h2>

      {/* Comment Form */}
      <div className="bg-slate-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">Leave a Comment</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comment"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-vertical"
              placeholder="Share your thoughts..."
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Submitting...' : 'Submit Comment'}
          </button>
        </form>
      </div>

      {/* Comments List */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-900">
          {comments.length > 0 ? `${comments.length} Comment${comments.length !== 1 ? 's' : ''}` : 'No comments yet'}
        </h3>

        {loading ? (
          <div className="text-gray-600 py-4">Loading comments...</div>
        ) : comments.length === 0 ? (
          <div className="text-gray-600 py-4 italic">Be the first to comment!</div>
        ) : (
          <div className="space-y-6">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{comment.author_name}</h4>
                    <p className="text-sm text-gray-500">{formatDate(comment.created_at)}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{comment.comment_text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

