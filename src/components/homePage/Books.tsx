import { IBook } from "@/types/bookTypes";
import React from "react";
import BookCard from "./BookCard";
import getBooks from "@/lib/BooksData";



const Books = async () => {
  const bookDatas = await getBooks();
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center pt-10 pb-5">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
        {bookDatas.slice(0, 6).map((book: IBook) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
