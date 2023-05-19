import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>

      <div className="lists">
        <Link href="/" className = "list">Home</Link>
        <Link href="/about" className = "list">About</Link>
        <Link href="/ninjas" className = "list">Ninja Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
