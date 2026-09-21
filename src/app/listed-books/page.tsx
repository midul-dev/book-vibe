import ListedBookTab from "@/components/bookComponents/ListedBookTab";

const ListedBooksPage = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            My Library
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900 md:text-4xl">
            Listed Books
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Your personal reading list
          </p>
        </div>
      </div>
      {/* tabs */}
      <ListedBookTab />

    </section>
  );
};

export default ListedBooksPage;
