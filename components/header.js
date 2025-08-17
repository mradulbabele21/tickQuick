import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">TicketHub</Link>
      </h1>
      <nav>
        <Link to="/login" className="px-2">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
