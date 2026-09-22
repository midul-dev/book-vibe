import { IBook } from "@/types/bookTypes";

const getBooks = async (): Promise<IBook[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`,
    );
    return res.json();
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};

export default getBooks;
