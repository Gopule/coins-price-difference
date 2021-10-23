const router = require("express").Router();

router.use("/coins", require("./coins"));

module.exports = router;
