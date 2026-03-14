const { enrolledCourses } = require("./my-learning.data");

const VALID_STATUSES = ["Inprogress", "Completed", "Upcoming"];

function getMyLearningCourses(req, res) {
  const { status } = req.query;

  if (status && !VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      message: `Invalid status '${status}'. Valid values: ${VALID_STATUSES.join(", ")}.`,
    });
  }

  const courses = status
    ? enrolledCourses.filter((course) => course.status === status)
    : enrolledCourses;

  const summary = {
    Inprogress: enrolledCourses.filter((course) => course.status === "Inprogress").length,
    Completed: enrolledCourses.filter((course) => course.status === "Completed").length,
    Upcoming: enrolledCourses.filter((course) => course.status === "Upcoming").length,
  };

  return res.status(200).json({
    courses,
    summary,
  });
}

module.exports = {
  getMyLearningCourses,
};
