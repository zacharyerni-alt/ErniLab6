import { useState } from "react";

function AddTeacher({ onAddTeacher }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [department, setDepartment] = useState("");
  const [specialization, setSpecialization] = useState("Programming");
  const [sex, setSex] = useState("Male");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTeacher = { id, name, department, specialization, sex };
    onAddTeacher(newTeacher);

    // reset the form
    setName("");
    setId("");
    setDepartment("");
    setSpecialization("Programming");
    setSex("Male");
  };

  return (
    <form className="teacher-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Employee Number:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
      </label>

      <label>
        Department:
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
      </label>

      <label>
        Specialization:
        <select
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="Programming">Programming</option>
          <option value="Networking">Networking</option>
          <option value="Database">Database</option>
        </select>
      </label>

      <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTeacher;