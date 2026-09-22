'use client';
import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RemoveButton from "./RemoveButton";
import { FaTrashArrowUp } from "react-icons/fa6";


const ListedBooksCard = ({ book, onRemove }: { book: IBook, onRemove: (book: IBook) => void }) => {
  return (
    <div
      key={book.bookId}
      className="group card overflow-hidden border border-slate-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="m-4 flex h-64 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-100 md:m-5 md:h-52 md:w-40">
          <Image
            src={book.image}
            alt={book.bookName}
            width={180}
            height={250}
            unoptimized
            className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="card-body gap-0 p-5 md:p-6">
          {/* Category */}
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="badge border-0 bg-emerald-50 text-emerald-700">
              {book.category}
            </span>

            {book.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="badge border-0 bg-slate-100 text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="card-title text-2xl font-bold text-slate-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-1 text-sm text-slate-500">
            By <span className="font-medium text-slate-700">{book.author}</span>
          </p>

          {/* Book information */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
            <span>
              📅 Published:{" "}
              <strong className="text-slate-700">
                {book.yearOfPublishing}
              </strong>
            </span>

            <span>
              📖 <strong className="text-slate-700">{book.totalPages}</strong>{" "}
              Pages
            </span>

            <span>
              ⭐ <strong className="text-slate-700">{book.rating}</strong>
            </span>
          </div>

          {/* Publisher */}
          <p className="mt-2 text-sm text-slate-500">
            Publisher:{" "}
            <span className="font-medium text-slate-700">{book.publisher}</span>
          </p>

          {/* Bottom */}
          <div className="card-actions mt-5 flex items-center justify-between">
            <Link
              href={`/books/${book.bookId}`}
              className="btn rounded-xl border-0 bg-emerald-600 px-6 text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 hover:shadow-md"
            >
              View Details
            </Link>
<button
        className="btn btn-circle border-0 bg-red-50 text-red-500 hover:bg-red-100 hover:scale-110 transition-transform"
        title="Remove from reading list"
        onClick={() => onRemove(book)}
      >
        <FaTrashArrowUp />
      </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;
