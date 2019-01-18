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
    res.status(errCodes.okay).json({});
  } catch (err) {
    failed(res);
  }
});

module.exports = route;
