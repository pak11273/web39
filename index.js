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
