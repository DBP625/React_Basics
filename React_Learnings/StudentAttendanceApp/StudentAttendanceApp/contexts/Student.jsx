import { createContext, useState } from "react";

export const StudentCtx = createContext();

const StudentProvider = (props) => {
  const { children } = props;
  const [studentName, setStudentName] = useState(""); // usestate means to create state variables so that they can hold values and update the UI when those values change
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const togglelist = (student) => {
    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: undefined };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const ctxvalue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    togglelist,
  };

  return <StudentCtx.Provider value={ctxvalue}>{children}</StudentCtx.Provider>;
};
export default StudentProvider;
