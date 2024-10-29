const express = require("express");
const { addGrade, getGrades } = require("../controllers/gradeControllers");
const { authUserMiddleWare } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create-grade", authUserMiddleWare, addGrade);
router.get("/get-grade", authUserMiddleWare, getGrades);

module.exports = router;
