import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

const BookDetails = () => {
  //   const [input, setInput] = useState({});
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(input.available),
      })
      .then((res) => res.data.books);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            alignContent={"center"}
            maxWidth={700}
            alignSelf="center"
            margin={"auto"}
            marginTop={1}
          >
            <FormLabel>Book Name</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
              value={input.name}
              onChange={handleChange}
            ></TextField>
            <FormLabel>Author</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
              value={input.author}
              onChange={handleChange}
            ></TextField>
            <FormLabel>Description</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
              value={input.description}
              onChange={handleChange}
            ></TextField>
            <FormLabel>Price</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
              type="number"
              value={input.price}
              onChange={handleChange}
            ></TextField>
            <FormLabel>ImageURL</FormLabel>
            <TextField
              margin="normal"
              fullWidth
              variant="outlined"
              name="image"
              value={input.image}
              onChange={handleChange}
            ></TextField>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />
            <Button variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
