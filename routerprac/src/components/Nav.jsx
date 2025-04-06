import React from 'react'
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <nav
        className="relative flex items-center justify-between h-16 px-3 font-mono text-black bg-white shadow-sm"
        role="navigation"
      >
        <div className="logo ">
          <h1>Hemant</h1>
        </div>
        <div className="flex items-center justify-center gap-4 links">
          <Link to="Home">Home</Link>
          <Link to="Contacts">Contacts</Link>
        </div>
        <div className="flex items-center justify-center gap-2 icons links">
          <p>git</p>
          <p>git</p>
          <p>git</p>
        </div>
      </nav>
    </>
  );
}

export default Nav;