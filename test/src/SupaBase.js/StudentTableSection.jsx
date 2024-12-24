import React, { useState, useEffect, useContext } from "react";
import { SupabaseContext } from "../App";

export default function StudentTableSection() {
  const supabase = useContext(SupabaseContext); // Access Supabase client
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", email: "" });

  // Fetch students from Supabase
  const fetchStudents = async () => {
    const { data, error } = await supabase.from("students").select("*");
    if (error) console.error("Error fetching students:", error);
    else setStudents(data);
  };

  // Add a new student
  const addStudent = async () => {
    if (newStudent.name && newStudent.email) {
      const { data, error } = await supabase
        .from("students")
        .insert([newStudent]);
      if (error) console.error("Error adding student:", error);
      else {
        setStudents((prev) => [...prev, ...data]); // Update local state
        setNewStudent({ name: "", email: "" }); // Reset form
      }
    }
  };

  // Listen for real-time updates
  useEffect(() => {
    const subscription = supabase
      .from("students")
      .on("*", (payload) => {
        console.log("Change received!", payload);
        fetchStudents(); // Re-fetch data on changes
      })
      .subscribe();

    return () => {
      supabase.removeSubscription(subscription); // Cleanup subscription
    };
  }, [supabase]);

  // Initial fetch
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Student Management</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) =>
            setNewStudent({ ...newStudent, email: e.target.value })
          }
          className="border p-2 rounded"
        />
        <button
          onClick={addStudent}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Student
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border border-gray-300 p-2">{student.id}</td>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
