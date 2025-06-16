import React from "react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar  max-w-5xl mx-auto my-4 rounded-xl px-6">
      <div className="navbar-left">
        <a href="/" className="logo">Nova</a>
      </div>

      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/mission">Our Mission</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/courses">Courses</a></li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="/account" className="user-icon" aria-label="User Account">
          <FaUser size={20} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
