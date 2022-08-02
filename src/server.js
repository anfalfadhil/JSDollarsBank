const express = require("express");
const app = express();
const Router = require("./routes")
const mongoose = require("mongoose");
// const cors = require("cors");

const MONGODB_URI ="mongodb+srv://mongodb22:mongodb22@cluster0.pc6ddwv.mongodb.net/?retryWrites=true&w=majority"





const username = "mongodb22";
const password = "mongodb22";
const cluster = "Cluster0";
const dbname = "jsdollarsbank";



mongoose.connect("mongodb+srv://mongodb22:mongodb22@cluster0.pc6ddwv.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
});


// Mongoose configuration
mongoose.connection.on("error", (err) =>
    console.log(err.message + " mongo is not running")
);


mongoose.connection.on("disconnected", () =>
    console.log("mongoose is disconnected")
);


mongoose.connection.once("open", () => {
    console.log("Mongoose Connected");
});


// Cors
// app.use(cors());


// Importing Schemas
const Customer = require("./Models/Customer");
const Transaction = require("./Models/Transaction");


// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);


app.listen(4000, () => {
  console.log('app listening on port 4000');
});