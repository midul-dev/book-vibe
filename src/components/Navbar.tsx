import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>
      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>
    </>
  );
  return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
  <div className="container mx-auto flex w-full items-center ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">
            Book <span className="text-pink-600"> Vibe </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navMenu}</ul>
        </div>
        <div className="navbar-end flex gap-1 md:gap-2">
          <Link href="/login" className="text-sm md:btn md:btn-success md:rounded-lg ">
            Login
          </Link>
          <Link href="/login" className=" text-sm border py-1 px-2 text-pink-600 rounded-lg md:btn md:btn-secondary md:rounded-lg">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
