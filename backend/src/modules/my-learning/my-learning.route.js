const express = require("express");
const { getMyLearningCourses } = require("./my-learning.controller");

const router = express.Router();

router.get("/courses", getMyLearningCourses);

module.exports = router;
