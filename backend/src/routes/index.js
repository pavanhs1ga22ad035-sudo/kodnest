const express = require("express");
const myLearningRouter = require("../modules/my-learning/my-learning.route");

const router = express.Router();

router.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

router.use("/my-learning", myLearningRouter);

module.exports = router;
