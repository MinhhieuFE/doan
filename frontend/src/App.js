import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbars from './Components/Navbars';
import Login from './HomePage/Auth/Login';
import Register from './HomePage/Auth/Register';
import Student from './HomePage/Page/Student';
import Teacher from './HomePage/Page/Teacher';
import Admin from './HomePage/Dashboard/Admin';

const App = () => {
    return (
        <Router>
            <Navbars />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/student" element={<Student />} />
                <Route path="/teacher" element={<Teacher />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </Router>
    );
};

export default App;
