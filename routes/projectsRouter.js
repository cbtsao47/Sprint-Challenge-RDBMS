const express = require("express");
const route = express.Router();
const errCodes = require("../common/errCodes");

function failed(res) {
  res
    .status(errCodes.internalServerError)
    .json({ message: "Internal Server Error" });
}

route.get("/", async (req, res) => {
  try {
  } catch (err) {
    failed(res);
  }
});

module.exports = route;
