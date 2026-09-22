"use client";

import { BookContext } from "@/context/BookProvider";
import { IBook } from "@/types/bookTypes";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

const AddToReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext) as {
    readBooks: IBook[];
    setReadBooks: Dispatch<SetStateAction<IBook[]>>;
  };
  const isBookAlreadyAdded = readBooks.some(
    (readBook) => readBook.bookId === book.bookId,
  );
  const handleAddToRead = () => {
    setReadBooks([...readBooks, book]);
    toast.success(`${book.bookName} added to your reading list!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      disabled={isBookAlreadyAdded}
      onClick={handleAddToRead}
      className={
        "btn rounded-xl border-0  bg-emerald-600 px-7 text-white shadow-md hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500"
      }
    >
      {isBookAlreadyAdded ? "✓ Already Added" : "Add to Read"}
    </button>
  );
};

export default AddToReadButton;
