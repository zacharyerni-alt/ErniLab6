function TeacherList({ teachers }) {
  return (
    <div className="teacher-list">
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <p>Name: {teacher.name}</p>
          <p>Employee Number: {teacher.id}</p>
          <p>Department: {teacher.department}</p>
        </div>
      ))}
    </div>
  );
}

export default TeacherList;