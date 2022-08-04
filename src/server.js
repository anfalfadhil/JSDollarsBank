
const express = require("express");
const app = express();
const Router = require("./routes.js")
const mongoose = require("mongoose");
// const cors = require("cors");




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
const Customer = import("./Models/Customer.js");
const Transaction = import("./Models/Transaction.js");


// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);
// app.post("/transaction", authenticateToken)

app.listen(4000, () => {
  console.log('app listening on port 4000');
});