'use client';
import { BookContext } from '@/context/BookProvider';
import { IBook } from '@/types/bookTypes';
import React, { Dispatch, SetStateAction, useContext } from 'react';

const AddToWishlistButton = ({book}:{book:IBook}) => {
    const { wishList, setWishList } = useContext(BookContext) as {
        wishList: IBook[];
        setWishList: Dispatch<SetStateAction<IBook[]>>;
      };
      const isBookAlreadyAdded = wishList.some(
        (wishList) => wishList.bookId === book.bookId,
      );
      const handleAddToWished = () => {
        setWishList([...wishList, book]);
      };
    
      return (
        <button
          disabled={isBookAlreadyAdded}
          onClick={handleAddToWished}
          className={"btn rounded-xl border-0  bg-emerald-600 px-7 text-white shadow-md hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-500" }>
          {isBookAlreadyAdded ? "✓ Wished" : "Add to Wishlist"}
        </button>
      );
      
};

export default AddToWishlistButton;