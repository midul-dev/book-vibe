"use client";
import { IBook } from "@/types/bookTypes";
import React, { createContext, ReactNode, useState } from "react";

export const BookContext = createContext({});

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);

  const sharedBooks = { readBooks, setReadBooks };

  return (
    <BookContext.Provider value={sharedBooks}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
