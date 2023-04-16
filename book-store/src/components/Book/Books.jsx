import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css"

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data.books);
};

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => {
      console.log(data); // add this line to see the data being returned
      setBooks(data);
    });
  }, []);
  console.log(typeof books);
  return (
    <>
      <ul>
        {books &&
          books.map((book, i) => (
            <div className="book" key={i}>
              <Book book={book} />
            </div>
          ))}
      </ul>
    </>
  );
};

export default Books;
