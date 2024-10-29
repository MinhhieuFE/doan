const Grade = require("../models/Grade");

// Thêm điểm số
const addGrade = async (req, res) => {
  const { user_id, course_id, grade, semester } = req.body;
  const newGrade = new Grade({ user_id, course_id, grade, semester });

  try {
    await newGrade.save();
    res.status(201).json({ message: "Grade added successfully!" });
  } catch (error) {
    res.status(400).json({ error: "Failed to add grade" });
  }
};

// Lấy điểm số của sinh viên
const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate("user_id").populate("course_id");
    res.json(grades);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch grades" });
  }
};

module.exports = { addGrade, getGrades };
