import AddToReadButton from "@/components/AddToReadButton";
import AddToWishlistButton from "@/components/AddToWishlistButton";
import getBooks from "@/lib/BooksData";
import { IBook } from "@/types/bookTypes";
import Image from "next/image";
import React from "react";

const BooksDetailPage = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;
  const books = await getBooks();
  const book = books.find(
    (book: IBook) => Number(book.bookId) === Number(bookId),
  );
  console.log(book);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-[350px_1fr] lg:gap-12">
          {/* Book Cover */}
          <div className="flex justify-center">
            <div className="group relative w-full max-w-[320px] overflow-hidden rounded-2xl bg-slate-100 p-6 shadow-md">
              {/* Category Badge */}
              <span className="absolute left-4 top-4 z-10 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
                {book.category}
              </span>

              <Image
                src={book.image}
                alt={book.bookName}
                width={400}
                height={550}
                className="h-[420px] w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Book Information */}
          <div className="flex flex-col justify-center">
            {/* Small label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Book Details
            </p>

            {/* Title */}
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {book.bookName}
            </h1>

            {/* Author */}
            <p className="mt-3 text-lg text-slate-500">
              Written by{" "}
              <span className="font-semibold text-slate-800">
                {book.author}
              </span>
            </p>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-amber-50 px-4 py-2">
                <span className="text-xl text-amber-400">★</span>

                <span className="font-bold text-slate-800">{book.rating}</span>
              </div>

              <span className="text-sm text-slate-500">Reader Rating</span>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {book.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Book Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Pages</p>
                <p className="mt-1 font-bold text-slate-800">
                  {book.totalPages}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Published</p>
                <p className="mt-1 font-bold text-slate-800">
                  {book.yearOfPublishing}
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Category</p>
                <p className="mt-1 font-bold text-slate-800">{book.category}</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs text-slate-400">Publisher</p>
                <p className="mt-1 truncate font-bold text-slate-800">
                  {book.publisher}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToWishlistButton book={book} />

              <AddToReadButton book={book} />
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="border-t border-slate-200 bg-slate-50/70 px-6 py-8 md:px-10 md:py-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              About this book
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Book Review
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              {book.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailPage;
