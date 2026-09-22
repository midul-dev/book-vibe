"use client";

import { BookContext } from "@/context/BookProvider";

import React, { useContext } from "react";
import ListedBooksCard from "../ListedBooksCard";
import { IBook } from "@/types/bookTypes";

interface ReadBookContext {
  readBooks: IBook[];
}

const ListedBookTab = () => {
  const { wishList, setWishList, readBooks, setReadBooks } = useContext(
    BookContext,
  ) as {
    wishList: IBook[];
    setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };
  const handleRemoveReadBook = (book: IBook) => {
    setReadBooks(readBooks.filter((b) => b.bookId !== book.bookId));
  };
  const handleRemoveWishList = (book: IBook) => {
    setWishList(wishList.filter((b) => b.bookId !== book.bookId));
  };
  return (
    <div>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {/* Read Books */}
          <div className="space-y-5">
            {readBooks.map((book: IBook) => (
              <ListedBooksCard
                key={book.bookId}
                book={book}
                onRemove={handleRemoveReadBook}
              />
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
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishList.length})`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {/* WishList */}
          <div className="space-y-5">
            {wishList.map((book) => (
              <ListedBooksCard
                key={book.bookId}
                book={book}
                onRemove={handleRemoveWishList}
              />
            ))}
          </div>
          {/* Empty state */}
          {wishList.length === 0 && (
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
        </div>
      </div>
    </div>
  );
};

export default ListedBookTab;
