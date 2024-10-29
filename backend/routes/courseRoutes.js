const express = require("express");
const { getCourses, addCourse } = require("../controllers/courseControllers");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/get-courses", authMiddleware, getCourses);
router.post("/create-courses", authMiddleware, addCourse);

module.exports = router;
