import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Adjust the path as needed

const AddStudentForm = () => {
  const [name, setName] = useState('');

  const handleAddStudent = async () => {
    const { error } = await supabase.from('students').insert([{ name }]);
    if (error) console.error(error);
    else alert('Student added successfully!');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default AddStudentForm;
