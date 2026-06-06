import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StudentItem from "./StudentItem";

function App() {
  const [students, setStudents] = useState([
    "Ravi",
    "Priya",
    "Kiran",
  ]);

  const [studentName, setStudentName] = useState("");

  const inputRef = useRef(null);

  // Focus when component loads
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Update browser title
  useEffect(() => {
    document.title = `Students: ${students.length}`;
  }, [students]);

  // Add student
  const addStudent = () => {
    if (studentName.trim() === "") return;

    setStudents([...students, studentName]);
    setStudentName("");
  };

  // useCallback
  const deleteStudent = useCallback((name) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student !== name)
    );
  }, []);

  // useMemo
  const totalStudents = useMemo(() => {
    return students.length;
  }, [students]);

  const totalCharacters = useMemo(() => {
    return students.reduce(
      (sum, student) => sum + student.length,
      0
    );
  }, [students]);

  return (
    <div>
      <h1>Student Management Dashboard</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>

      <h3>Total Students: {totalStudents}</h3>
      <h3>Total Characters: {totalCharacters}</h3>

      <ul>
        {students.map((student, index) => (
          <StudentItem
            key={index}
            name={student}
            onDelete={deleteStudent}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;