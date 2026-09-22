"use client";
import { BookContext } from "@/context/BookProvider";
import { IBook } from "@/types/bookTypes";
import React, { useContext } from "react";

const RemoveButtonWishList = ({ book }: { book: IBook }) => {
    const { wishList, setWishList } = useContext(BookContext) as {
        wishList: IBook[];
        setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
    };

    const handleRemoveWishList = () => {
        setWishList(wishList.filter((b) => b.bookId !== book.bookId));
    }
    return (
        <div>
            <button
        className="btn btn-circle border-0 bg-red-50 text-red-500 hover:bg-red-100"
        title="Remove from wish list"
        onClick={handleRemoveWishList}
      >
        🗑
      </button>
        </div>
    );
};

export default RemoveButtonWishList;



