import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-6 py-16">
      
      {/* Decorative background circles */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">

        {/* Book Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-4xl shadow-sm">
          📖
        </div>

        {/* 404 */}
        <p className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          This page got lost between the pages.
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
          Looks like the page you&apos;re looking for doesn&apos;t exist or has
          wandered off to another chapter.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="btn rounded-xl border-0 bg-emerald-600 px-7 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg"
          >
            ← Back to Home
          </Link>

          <Link
            href="/books"
            className="btn rounded-xl border border-slate-200 bg-white px-7 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50 hover:shadow-md"
          >
            Explore Books
          </Link>

        </div>

        {/* Bottom quote */}
        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-sm backdrop-blur">
          <p className="text-sm italic leading-6 text-slate-500">
            &ldquo;Every lost page is just an opportunity to start a new chapter.&rdquo;
          </p>

          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Book Vibe
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotFound;