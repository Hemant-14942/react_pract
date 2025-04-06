import React from 'react'

const Header = () => {
  return (
    <>
      <header className=" border-b-2 border-amber-400 ">
        <div className="header  flex justify-between mx-auto tems-center px-56">
          <h1 className="logo">My Website</h1>
          <nav>
            <ul className="nav-links flex space-x-6">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Country</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header