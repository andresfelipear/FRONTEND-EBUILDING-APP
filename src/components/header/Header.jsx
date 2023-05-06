import React from 'react';

function Header() {
  return (
    <header className="bg-gray-900 text-zinc-300 block">
      <div className="py-4 text-center font-medium w-fit m-auto border-b-2">
            <h1 className="uppercase text-7xl">design lux</h1>
            <p className="text-right italic">We design what you dream</p>
        </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
