const express = require("express");
const usersController = require("../controllers/userControllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send('<a href="/users">/users</a>');
});

router.get("/users", usersController.userGetAll);

router.get("/users/:id", usersController.userGetById);

router.post("/users", usersController.userCreate);

router.put("/users/:id", usersController.userUpdate);

router.delete("/users/:id", usersController.userDelete);

module.exports = router;