//admin password: 0v73bMhcab4K5YUt
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book_route");
const cors = require("cors");

const app = express();

//MiddleWares
app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://admin:0v73bMhcab4K5YUt@bookstorecluster.wzwm9v8.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.error(err));
