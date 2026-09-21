"use client";
import { IBook } from "@/types/bookTypes";
import React, { createContext, ReactNode, useState } from "react";

export const BookContext = createContext({});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishList, setWishList, ] = useState<IBook[]>([]);

  const sharedBooks = { readBooks, setReadBooks, wishList, setWishList };

  return (
    <BookContext.Provider value={sharedBooks}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
