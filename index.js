const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product-model.js");
const { message } = require("statuses");
const status = require("statuses");
const productRoute = require("./routes/product-route.js");
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running");
});

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello ");
});

mongoose
  .connect(
    "mongodb+srv://rishisodani9:7va1wLwuEm4GI9Uq@api.8admubp.mongodb.net/Api-data?retryWrites=true&w=majority&appName=api"
  )
  .then(() => {
    console.log("Connected");
  })
  .catch(() => {
    console.log("Not Conneted");
  });

//7va1wLwuEm4GI9Uq
//mongodb+srv://rishisodani9:<password>@api.8admubp.mongodb.net/?retryWrites=true&w=majority&appName=api
