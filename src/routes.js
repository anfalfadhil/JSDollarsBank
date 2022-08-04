const express = require("express");
const userModel = require("./Models/Customer.js");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");
const { default: register } = require("./Register.js");
require('dotenv').config()
const bcrypt = require("bcrypt")
const { AuthUser} = require("./Auth")
// const {getCurrentLoggedinUser } = require('./login')
const {createTransaction } = require('./transactions')


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authenticatin']
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    register.user = user

    res.cookie("token", token , {
      httpOnly: true,
    })

    next()
})


}

router.post("/register", async (request, response) => {
    
  
    try {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(request.body.password, salt)
      
      const user = {
        "name": request.body.name,
        "phone": request.body.phone,
        "password": hashedPassword,
        "balance": request.body.balance
      }

      await user.save();
      response.status(201).send(user);

    } catch (error) {
      response.status(500).send("user: " + request.body.password + "cannot create a new user");
    }
});

router.get("/transactions", authenticateToken, (req, res) => {
    res.json(transactions.filter( trans => trans.user === req.user.name))
})


router.post("/maketrans",authenticateToken, (req, res) => {

    createTransaction(req, res)
    return res.sendStatus(200)
})



router.post("/login", (req, res) => {
    const user = req.body.name;
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})


// router.get('/currentuser', (req, res) => {
//   const user = getCurrentLoggedinUser(req.body.user)
//   res.send('Hello ' + user.name);
// });



router.get('/', (req, res) => {
    res.send('Hello World');
  });

router.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  module.exports = router;