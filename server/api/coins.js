const router = require("express").Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
  try {
    res.json();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
