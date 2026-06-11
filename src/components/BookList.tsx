import type { Book } from '../types/book'

type Props = {
    books: Book[]
    onToggleRead: (id: number, is_read: boolean) => void
    onDelete: (id: number) => void
}

export function BookList({ books, onToggleRead, onDelete }: Props) {
    if (books.length === 0) {
        return <p className="text-gray-400 text-sm">Ingen bøger endnu tilføj en!</p>
    }

    return (
        <ul className="flex flex-col gap-4">
            {books.map(book => (
                <li key={book.id} className="bg-gray-800 rounded-xl shadow p-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-lg font-semibold text-white">{book.title}</h3>
                            <p className="text-sm text-gray-400">af {book.author}</p>
                            {book.description && (
                                <p className="text-sm text-gray-300 mt-2">{book.description}</p>
                            )}
                            <p className="text-sm mt-2 text-gray-300">{book.is_read ? 'Læst' : 'Ikke læst'}</p>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                            <button
                                onClick={() => onToggleRead(book.id, book.is_read)}
                                className="bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg px-3 py-1 transition-colors"
                            >
                                {book.is_read ? 'ulæst' : 'læst'}
                            </button>
                            <button
                                onClick={() => onDelete(book.id)}
                                className="bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg px-3 py-1 transition-colors"
                            >
                                Slet
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}