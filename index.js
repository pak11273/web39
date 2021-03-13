const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build"))); // react app

if (process.NODE_ENV !== "production") {
  // on heroku env is NODE_ENV => production
  const cors = require("cors");
  server.use(cors());
}

server.get("/api/hello", (req, res) => {
  res.json({ message: "hello" });
});

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html")); // react app
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
