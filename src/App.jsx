import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import TeacherList from "./pages/TeacherList";
import AddTeacher from "./pages/AddTeacher";
import Login from "./pages/Login";

function App() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // fetch teachers from the Express API
  useEffect(() => {
    fetch("http://localhost:5000/api/teachers")
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // save a new teacher to MongoDB, then add it to the state
  const handleAddTeacher = async (newTeacher) => {
    const response = await fetch("http://localhost:5000/api/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTeacher),
    });
    const savedTeacher = await response.json();
    setTeachers([...teachers, savedTeacher]);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList students={students} />} />
        <Route path="/teachers" element={<TeacherList teachers={teachers} />} />
        <Route
          path="/add-teacher"
          element={<AddTeacher onAddTeacher={handleAddTeacher} />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;