import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar max-w-5xl mx-auto my-4 rounded-xl px-6">
      <div className="navbar-left">
        <Link href="/">
          <a className="logo">Nova</a>
        </Link>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link href="/mission">
              <a>Our Mission</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>Courses</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Link href="/account">
          <a className="user-icon" aria-label="User Account">
            <FaUser size={20} />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
