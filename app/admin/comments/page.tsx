'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: number
  post_slug: string
  author_name: string
  author_email: string
  comment_text: string
  approved: boolean
  created_at: string
}

const ADMIN_PASSWORD = 'scripturemeanings-admin'

export default function AdminCommentsPage() {
  const [password, setPassword] = useState('')
  const [isAuthed, setIsAuthed] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [actionMessage, setActionMessage] = useState('')

  useEffect(() => {
    if (isAuthed) {
      fetchComments()
    }
  }, [isAuthed])

  const fetchComments = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/admin/comments', {
        headers: {
          'x-admin-secret': password,
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data = await response.json()
      setComments(data.comments)
    } catch (err) {
      console.error(err)
      setError('Failed to load comments')
    } finally {
      setLoading(false)
    }
  }

  const handleApprove = async (commentId: number) => {
    await handleAction(commentId, 'approve')
  }

  const handleDelete = async (commentId: number) => {
    if (!confirm('Are you sure you want to delete this comment?')) return
    await handleAction(commentId, 'delete')
  }

  const handleAction = async (commentId: number, action: 'approve' | 'delete') => {
    setActionMessage('')
    setError('')

    try {
      const response = await fetch('/api/admin/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': password,
        },
        body: JSON.stringify({ action, commentId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Action failed')
      }

      setActionMessage(data.message || 'Action completed successfully')
      fetchComments()
    } catch (err) {
      console.error(err)
      setError((err as Error).message || 'Action failed')
    }
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthed(true)
    } else {
      setError('Invalid password')
    }
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center flex-wrap gap-4 justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Comment Moderation</h1>
            <p className="text-sm text-gray-500">
              Showing all comments (Approved & Pending)
            </p>
          </div>
          <button
            onClick={fetchComments}
            disabled={loading}
            className="bg-slate-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-800 transition disabled:opacity-50"
          >
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>

        {actionMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
            {actionMessage}
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {comments.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-gray-600">No comments found.</div>
        ) : (
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-lg shadow p-6 border border-gray-100">
                <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
                  <div>
                    <p className="text-sm text-gray-500">Post:</p>
                    <p className="font-semibold text-gray-900">{comment.post_slug}</p>
                  </div>
                  <div className="text-sm">
                    <span
                      className={`px-2 py-1 rounded-full ${
                        comment.approved ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {comment.approved ? 'Approved' : 'Pending'}
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Author:</p>
                  <p className="font-medium text-gray-900">{comment.author_name}</p>
                  <p className="text-sm text-gray-500">{comment.author_email}</p>
                </div>
                <p className="text-gray-800 whitespace-pre-wrap mb-4">{comment.comment_text}</p>
                <div className="text-sm text-gray-500 mb-4">
                  Submitted on{' '}
                  {new Date(comment.created_at).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </div>
                <div className="flex flex-wrap gap-3">
                  {!comment.approved && (
                    <button
                      onClick={() => handleApprove(comment.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    >
                      Approve
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

