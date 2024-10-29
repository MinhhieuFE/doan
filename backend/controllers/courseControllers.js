const Course = require("../models/Course");

// Lấy danh sách môn học
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};

// Thêm môn học
const addCourse = async (req, res) => {
  const { course_name, course_code, credits } = req.body;
  const newCourse = new Course({ course_name, course_code, credits });

  try {
    await newCourse.save();
    res.status(201).json({ message: "Course added successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to add course" });
  }
};

module.exports = { getCourses, addCourse };
