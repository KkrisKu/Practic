/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();

const users = require("../db/users.json");
const resWrapper = require("./responceWrapper");


router.post("/login", (req, res) => {
  const { login, password } = req.body;
  const user = users.find((item) => item.username === login && item.password === password);
  if (user) {
    res.json(resWrapper(user, 200, "User found"));
  } else {
    res.status(404).json(resWrapper(null, 404, "User not found"));
  }
});

router.post("/register", (req, res) => {
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


module.exports = router;

// #Login routes
//curl -X POST -H "Content-Type: application/json" -d '{"login":"user1","password":"password123"}' http://localhost:3002/api/v1/auth/login

// #Register routes
//curl -X POST -H "Content-Type: application/json" -d '{"username":"user11","email":"user11@example.com","password":"password123","role":"student"}' http://localhost:3002/api/v1/auth/register
