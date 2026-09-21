import Image from 'next/image';
import React from 'react';
import heroImage from '../../assets/pngwing 1.png';
import Link from 'next/link';


const Hero = () => {
    return (
<section className="container mx-auto w-full px-4 pt-10">
  <div className="relative grid min-h-[450px] grid-cols-1 items-center overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-8 py-12 shadow-lg md:grid-cols-2 md:px-14 lg:px-20">

    {/* Decorative Circle */}
    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />

    <div className="relative z-10 text-center md:text-left">
      <span className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        Discover Your Next Favorite Book
      </span>

      <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Books to freshen up
        
        <span className="text-emerald-600"> your bookshelf</span>
      </h1>

      <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
        Explore inspiring stories, timeless classics, and exciting new
        releases. Find your next great read today.
      </p>

      <button className="btn mt-7 rounded-xl bg-emerald-600 px-7 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg">
        <Link href={"/books"}>View The List</Link>
      </button>
    </div>

    {/* Image */}
    <div className="relative z-10 mt-10 flex justify-center md:mt-0 md:justify-end">
      <div className="relative">
        {/* Image background */}
        <div className="absolute inset-0 scale-90 rounded-full bg-emerald-200/50 blur-2xl" />

        <Image
          src={heroImage}
          alt="Books"
          width={420}
          height={320}
          className="relative w-full max-w-[420px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>

  </div>
</section>
    );
};

export default Hero;