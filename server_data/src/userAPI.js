/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

const users = require("../db/users.json");
const resWrapper = require("./responceWrapper");

router.get("/", (req, res) => {
  res.json(resWrapper(users, 200, "Users list returned"));
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(resWrapper(user, 200, "User found"));
  } else {
    res.status(404).json(resWrapper(null, 404, "User not found")); //{ error: "User not found" });
  }
});

router.post("/", (req, res) => {
  const { username, email, password, role } = req.body;
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password,
    role,
  };
  users.push(newUser);
  res.status(201).json(resWrapper(newUser, 201, "User created"));
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { username, email, password, role } = req.body;
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    const updatedUser = {
      id,
      username,
      email,
      password,
      role,
    };
    users.splice(userIndex, 1, updatedUser);
    res.json(resWrapper(updatedUser, 200, "User updated"));
  } else {
    res.status(404).json(resWrapper(null, 404, "User not found")); //{ error: "User not found" });
  }
});

router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json(resWrapper(null, 200, "User deleted")); //{ message: "User deleted" });
  } else {
    res.status(404).json(resWrapper(null, 404, "User not found")); //{ error: "User not found" });
  }
});

module.exports = router;


// # Get all users
// curl -X GET http://localhost:3002/api/v1/user/

// # Get user by ID
// curl -X GET http://localhost:3002/api/v1/user/1

// # Create a new user
// curl -X POST -H "Content-Type: application/json" -d '{"username":"newUser","email":"newUser@example.com","password":"password123","role":"student"}' http://localhost:3002/api/v1/user/

// # Update a user by ID
// curl -X PUT -H "Content-Type: application/json" -d '{"username":"updatedUser","email":"updatedUser@example.com","password":"newpassword123","role":"admin"}' http://localhost:3002/api/v1/user/1

// # Delete a user by ID
// curl -X DELETE http://localhost:3002/api/v1/user/1

