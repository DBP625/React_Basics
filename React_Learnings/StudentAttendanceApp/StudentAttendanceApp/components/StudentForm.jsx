import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const StudentForm = () => {
  const contextValue = useContext(StudentCtx);

  console.log("Context Value:", contextValue);

  const {
    editMode,
    editableStudent,
    students,
    setStudents,
    setEditMode,
    setEditableStudent,
    setStudentName,
    studentName,
  } = contextValue || {};

  const changeNameHandler = (e) => {
    setStudentName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // Prevent Refresh
    if (studentName.trim() === "") {
      return alert(`Please enter a valid student name`);
    }
    editMode ? updateHandler() : createHandler();
  };

  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const updateHandler = () => {
    const updatedStudentList = students.map((item) => {
      if (item.id === editableStudent.id) {
        return { ...item, name: studentName };
      }
      return item;
    });
    setStudents(updatedStudentList);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
    >
      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={changeNameHandler}
        className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className={`px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
          editMode
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {editMode ? "✏️ Update Student" : "➕ Add Student"}
      </button>
    </form>
  );
};

export default StudentForm;
