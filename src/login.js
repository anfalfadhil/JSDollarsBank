const jwt = require("jsonwebtoken")
const express = require("express");
const app = express();
const { connection } = require("mongoose")
// import { MongoClient } from "mongodb";


// const mongodb = app.currentUser.MongoClient("mongodb-atlas");
// const users = mongodb.db("Cluster0").collection("users")

// function getCurrentLoggedinUser(name, res){
//     const foundedUser= users.findOne({ name: name})
//     res.send("Welcome " + foundedUser.name)

// }


module.exports = {
    getCurrentLoggedinUser
}