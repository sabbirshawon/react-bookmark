import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>React Reading List</h1>
      <p>You currently need to read {books.length} books ...</p>
    </div>
  );
};

export default Navbar;
