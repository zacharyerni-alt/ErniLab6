import fs from "fs";
import mongoose from "mongoose";
import Student from "./models/student.js";
import Teacher from "./models/teacher.js";

const students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));
const teachers = JSON.parse(fs.readFileSync("./data/teachers.json", "utf-8"));

await mongoose.connect("mongodb://localhost:27017/studentDB");

await Student.deleteMany({});   // clear old data so you don't get duplicates
await Teacher.deleteMany({});

await Student.insertMany(students);
await Teacher.insertMany(teachers);

console.log("Data imported to MongoDB");
await mongoose.disconnect();