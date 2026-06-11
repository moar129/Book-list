import { useState } from 'react'

type Props = {
    onAdd: (title: string, author: string, description: string) => void
}

export function BookForm({ onAdd }: Props) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault()
        if (!title || !author) return
        onAdd(title, author, description)
        setTitle('')
        setAuthor('')
        setDescription('')
    }

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl shadow p-6 mb-8 flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-200">Tilføj en bog</h2>
            <input
                type="text"
                placeholder="Titel"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="text"
                placeholder="Forfatter"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                placeholder="Beskrivelse (valgfri)"
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-2 transition-colors"
            >
                Tilføj bog
            </button>
        </form>
    )
}