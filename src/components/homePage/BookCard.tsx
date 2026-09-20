import Image from "next/image";
import React from "react";
import { IBook } from "@/types/bookTypes";
import Link from "next/link";

const BookCard = ({ book }: { book: IBook }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Book Image */}
      <div className="relative m-3 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          unoptimized
          className="h-64 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-600 shadow-sm backdrop-blur">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {book.tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="mt-1 text-sm text-slate-500">
          By <span className="font-medium text-slate-700">{book.author}</span>
        </p>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-slate-200" />

        {/* Book Info */}
        <div className="grid grid-cols-2 gap-y-3 text-sm">
          <div>
            <p className="text-xs text-slate-400">Publisher</p>
            <p className="font-medium text-slate-700">{book.publisher}</p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-medium text-slate-700">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-medium text-slate-700">
              {book.totalPages} pages
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">Rating</p>

            <div className="flex items-center justify-end gap-1">
              <span className="font-semibold text-slate-700">
                {book.rating}
              </span>

              <span className="text-amber-400">★</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`} className="btn mt-5 w-full rounded-xl border-0 bg-emerald-600 text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
