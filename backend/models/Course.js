const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    course_name: { type: String, required: true },
    course_code: { type: String, required: true, unique: true },
    credits: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', CourseSchema);
