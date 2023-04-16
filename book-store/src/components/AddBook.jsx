import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  FormLabel,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate} from 'react-router-dom';

const AddBook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    available: false,
    image: "",
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name,"Value",e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/books"));
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(input.available),
      })
      .then((res) => res.data.books);
  };

  return (
    <div>
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
            Add Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBook;
