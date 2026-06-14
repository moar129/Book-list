import { useBooks } from './hooks/useBooks'
import { BookForm } from './components/BookForm'
import { BookList } from './components/BookList'

function App() {
  const { books, loading, addBook, toggleRead, deleteBook } = useBooks()

  return (
    <div className="dark">
      <main className="min-h-screen bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-white mb-8">Min bogliste</h1>
          <BookForm onAdd={addBook} />
          {loading
            ? <p className="text-gray-400 mt-6">Henter bøger...</p>
            : <BookList books={books} onToggleRead={toggleRead} onDelete={deleteBook} />
          }
        </div>
      </main>
    </div>
  )
}

export default App

// Ændre tekst
// Min bogliste — eksamen 2026