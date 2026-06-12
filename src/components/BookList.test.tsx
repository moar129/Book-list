import { describe, it, expect } from 'vitest'

// test the BookList component
describe('BookList', () => {
    // test that a book can be marked as read
    it('should return true when a book is marked as read', () => {
        const book = { id: 1, title: 'The Pragmatic Programmer', author: 'David Thomas', read: true }
        expect(book.read).toBe(true)
    })
    // test that a book can be marked as unread
    it('should return false when a book is not marked as read', () => {
        const book = { id: 1, title: 'Clean Code', author: 'Robert Martin', read: false }
        expect(book.read).toBe(false)
    })
    
    //it('should fail deliberately', () => {expect(1).toBe(2)})
})






/*
describe  →  TestClass
it        →  TestMethod  
expect    →  Assert
*/
// expect(...).toBe(...) svarer til Assert.IsTrue() eller Assert.AreEqual()
// For more information on testing with Vitest, see https://vitest.dev/guide/ and https://vitest.dev/api/expect.html