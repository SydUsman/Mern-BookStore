import React from "react";
import "./Book.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data.books)
      .then(() => window.location.reload())
      .then(() => history("/books"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="info">
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>Rs {price}</h2>
        <Button LinkComponent={Link} to={`/books/${_id}`}>
          Update
        </Button>
        <Button onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default Book;
