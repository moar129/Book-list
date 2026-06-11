import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Book } from '../types/book'

// Custom hook to manage books state and interactions with Supabase database
export function useBooks() {
    //state for books and loading status
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    // initial fetch of books when the component using this hook mounts
    useEffect(() => {
        fetchBooks()
    }, [])

    // function to fetch books from the database
    async function fetchBooks() {
        const { data, error } = await supabase
            .from('books')
            .select('*')
            .order('created_at', { ascending: false }) // order by created_at descending to show newest books first

        if (error) console.error(error)
        else setBooks(data ?? [])
        setLoading(false)
    }

    // function to add a new book to the database
    async function addBook(title: string, author: string, description: string) {
        const { data, error } = await supabase
            .from('books')
            .insert([{ title, author, description }])
            .select()
            .single()

        if (error) console.error(error) // if the insert was successful, add the new book to the state
        else setBooks(prev => [data, ...prev]) // add the new book to the top of the list
    }

    // function to toggle the is_read status of a book
    async function toggleRead(id: number, is_read: boolean) {
        const { error } = await supabase
            .from('books')
            .update({ is_read: !is_read })
            .eq('id', id)

        if (error) console.error(error)
        else setBooks(prev =>
            prev.map(book => book.id === id ? { ...book, is_read: !is_read } : book) // update the is_read status in the state
        )
    }

    // function to delete a book from the database
    async function deleteBook(id: number) {
        const { error } = await supabase
            .from('books')
            .delete()
            .eq('id', id)

        if (error) console.error(error)
        else setBooks(prev => prev.filter(book => book.id !== id)) // remove the deleted book from the state
    }

    return { books, loading, addBook, toggleRead, deleteBook } // return the books, loading status, and functions to interact with the database
}