import React, { useEffect, useState } from "react";
import { getGrades } from "../../Services/apiServices";
import { jwtDecode } from "jwt-decode";

const Student = () => {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      const response = await getGrades();
      setGrades(response);
    };
    fetchGrades();
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const decoded = jwtDecode(storedToken);
      console.log(decoded);
    }
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <h3>Your Grades</h3>
      <ul>
        {grades.map((grade) => (
          <li key={grade._id}>
            Course: {grade.course_id.course_name}, Grade: {grade.grade},
            Semester: {grade.semester}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
