/* eslint-disable no-undef */
const express = require("express");

const cors = require('cors')

const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3005;

app.use(cors())
// Middleware
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});


app.get("/doc", (req, res) => {
  res.sendFile(__dirname + "/documents.html");
});

// Routes
const authAPI = require("./authAPI");
app.use("/api/v1/auth", authAPI);

const userAPI = require("./userAPI");
app.use("/api/v1/user", userAPI);

const courseAPI = require("./courseAPI");
app.use("/api/v1/course", courseAPI);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//Undefined Route Implement
app.use("*", (_req, res) => {
  res
    .status(404)
    .json({ status: "fail", data: "Not Found" });
});
