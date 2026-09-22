import BookCard from '@/components/homePage/BookCard';
import { IBook } from '@/types/bookTypes';
import React from 'react';

const getBooks = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

const BooksPage = async () => {
    const books = await getBooks()
    return (
        <div className="container mx-auto px-4">
            <h1 className='text-4xl font-bold text-center pt-10 pb-5'>All Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {books.map((book: IBook) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;