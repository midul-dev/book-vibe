import React from 'react';

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json')
  return res.json()
}
const BooksDetailPage = async ({ params }: { params: Promise<{ bookId: string }> }) => {
    const { bookId } = await params;
    const books = await getBooks();
    const book = books.find((book: { bookId: string }) => Number(book.bookId) === Number(bookId));
    console.log(book);
    
    return (
        <div>
            
        </div>
    );
};

export default BooksDetailPage;