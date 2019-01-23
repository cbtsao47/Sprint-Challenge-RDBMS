const express = require("express");
const route = express.Router();
const errCodes = require("../common/errCodes");
const db = require("../data/helpers/projectDb");

function failed(res) {
  res
    .status(errCodes.internalServerError)
    .json({ message: "Internal Server Error" });
}

route.get("/", async (req, res) => {
  try {
    let result = await db.get();
    res.json(result);
  } catch (err) {
    failed(res);
  }
});
route.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let result = await db.getById(id);
    res.json(result);
  } catch (err) {
    failed(res);
  }
});
route.post("/", async (req, res) => {
  const { body } = req;
  try {
    await db.insert(body);
    res
      .status(errCodes.created)
      .json({ message: "Successfully created project" });
  } catch (err) {
    failed(res);
  }
});
route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let query = await db.getById(id);
    if (!query.length) {
      res.status(errCodes.notFound).json({ message: "Project not found" });
    } else {
      await db.remove(id);
      res.status(errCodes.okay).json({ message: "Delete succesful" });
    }
  } catch (err) {
    failed(res);
  }
});

route.put("/:id", async (req, res) => {
  const { id } = req.params;
  const change = req.body;
  try {
    let query = await db.getById(id);
    if (!query) {
      res.status(errCodes.notFound).json({ message: "Project not found" });
    } else {
      await db.update(id, change);
      res.status(errCodes.accepted).json({ message: "Project updated" });
    }
  } catch (err) {
    failed(res);
  }
});
module.exports = route;
