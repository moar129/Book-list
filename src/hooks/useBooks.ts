import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import type { Book } from '../types/book'

export function useBooks() {
    const [books, setBooks] = useState<Book[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        supabase
            .from('books')
            .select('*')
            .order('created_at', { ascending: false })
            .then(({ data, error }) => {
                if (error) console.error(error)
                else setBooks(data ?? [])
                setLoading(false)
            })
    }, [])

    async function addBook(title: string, author: string, description: string) {
        const { data, error } = await supabase
            .from('books')
            .insert([{ title, author, description }])
            .select()
            .single()

        if (error) console.error(error)
        else setBooks(prev => [data, ...prev])
    }

    async function toggleRead(id: number, is_read: boolean) {
        const { error } = await supabase
            .from('books')
            .update({ is_read: !is_read })
            .eq('id', id)

        if (error) console.error(error)
        else setBooks(prev =>
            prev.map(book => book.id === id ? { ...book, is_read: !is_read } : book)
        )
    }

    async function deleteBook(id: number) {
        const { error } = await supabase
            .from('books')
            .delete()
            .eq('id', id)

        if (error) console.error(error)
        else setBooks(prev => prev.filter(book => book.id !== id))
    }

    return { books, loading, addBook, toggleRead, deleteBook }
}