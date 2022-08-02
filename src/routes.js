const express = require("express");
const userModel = require("./Models/Customer.js");
const app = express();
const router = express.Router();


router.post("/register", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});


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