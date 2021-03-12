const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const server = express();
server.use(express.json());

if (process.NODE_ENV === "development") {
  // on heroku env is NODE_ENV => production
  const cors = require("cors");
  server.use(cors());
}

server.use("*", (req, res) => {
  res.send("success");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log("listening on port: ", PORT);
});
