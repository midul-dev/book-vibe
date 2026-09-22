"use client";
import { BookContext } from "@/context/BookProvider";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

const RemoveButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext) as {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  };
  
  return (
    <div>
      
    </div>
  );
};

export default RemoveButton;
