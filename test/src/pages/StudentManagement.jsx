import React, { useEffect, useState } from "react";
import supabase from "../supabaseClient";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const StudentManagement = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", class: "" });

  const fetchStudents = async () => {
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setStudents(data);
  };

  const addStudent = async () => {
    const { name, email, class: studentClass } = newStudent;
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }
    const { error } = await supabase.from("students").insert([{ name, email, class: studentClass }]);
    if (!error) {
      fetchStudents();
      setNewStudent({ name: "", email: "", class: "" });
    }
  };

  const deleteStudent = async (id) => {
    const { error } = await supabase.from("students").delete().eq("id", id);
    if (!error) fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h1 className="text-lg font-bold mb-4">Student Management</h1>
      <div className="mb-6">
        <Input
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="mb-2"
        />
        <Input
          placeholder="Student Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          className="mb-2"
        />
        <Input
          placeholder="Class (Optional)"
          value={newStudent.class}
          onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
        />
        <Button onClick={addStudent} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add Student
        </Button>
      </div>
      <ul className="space-y-4">
        {students.map((student) => (
          <li key={student.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            <div>
              <h2 className="font-bold">{student.name}</h2>
              <p className="text-sm text-gray-500">{student.email}</p>
              {student.class && <p className="text-sm text-gray-500">Class: {student.class}</p>}
            </div>
            <Button
              onClick={() => deleteStudent(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManagement;
