"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  let [showNav, setShowNav] = useState(false);

  function handleShowNav(action) {
    if (action === "open") {
      setShowNav((i) => true);
    } else if (action === "close") {
      setShowNav((i) => false);
    }
  }

  return (
    <header>
      <div className=" flex justify-between items-center py-2 bg-secondary-light px-3">
        <img src="images/landing_images/jujora_icon.webp" alt="" className="h-12 "/>
        <div className="hidden md:flex md:w-1/2 lg:w-1/3 md:justify-around">
          <Link href={""}>Home</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Services</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>Blog</Link>
        </div>
        <div className="hidden md:block bg-secondary rounded-lg py-2 p-4 ">
          <button className="">
            <h1 className="text-white font-semibold">Join The Waitlist</h1>
          </button>
        </div>
        {showNav ? (
          <button
            className=" md:hidden  rounded-md p-2 text-primary "
            onClick={() => handleShowNav("close")}
          >
            <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
          </button>
        ) : (
          <button
            className=" md:hidden  rounded-md p-2 text-primary "
            onClick={() => handleShowNav("open")}
          >
            <Bars3Icon className=" h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>
      {showNav ? (
        <div className="md:hidden bg-secondary-light">
          <ul className="flex flex-col gap-3 p-6  ">
              <Link href="">Home</Link>
              <Link href="">About</Link>
              <Link href="/">Services</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Blog</Link>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </header>
  );
};

export default Navbar;
