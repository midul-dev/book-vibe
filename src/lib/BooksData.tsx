const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  return res.json();
};

export default getBooks;
