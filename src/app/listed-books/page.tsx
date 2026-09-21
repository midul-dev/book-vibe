'use client';
import ListedBooksCard from '@/components/ListedBooksCard';
import { BookContext } from '@/context/BookProvider';
import { IBook } from '@/types/bookTypes';
import React, { useContext } from 'react';

const ListedBooksPage = () => {
    const { readBooks } = useContext(BookContext) as {
        readBooks: IBook[];
    };
    return (
        <section className="container mx-auto px-4 py-10">
              {/* Header */}
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                    My Library
                  </p>
        
                  <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
                    Listed Books
                  </h1>
        
                  <p className="mt-2 text-sm text-slate-500">
                    Your personal reading list
                  </p>
                </div>
        
                <div className="badge badge-lg border-0 bg-emerald-100 px-5 py-4 font-semibold text-emerald-700">
                  {readBooks.length} Books
                </div>
              </div>
        
              {/* Books */}
              <div className="space-y-5">
                {readBooks.map((book) => (
                    <ListedBooksCard key={book.bookId} book={book} />
                ))}
                </div>
                {/* Empty state */}
      {readBooks.length === 0 && (
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50">
          <div className="text-5xl">📚</div>

          <h2 className="mt-4 text-xl font-bold text-slate-800">
            No books added yet
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Start adding books to your reading list.
          </p>
        </div>
        )}
                </section>
    );
};

export default ListedBooksPage;