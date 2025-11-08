import { useState } from "react";
import { useContext } from "react";
import "../resources/App.css";

import StudentForm from "../components/StudentForm";
import StudentSection from "../components/StudentSection";

import { StudentCtx } from "../contexts/Student";

function App(props) {
  // States
  // const [studentName, setStudentName] = useState(""); // usestate means to create state variables so that they can hold values and update the UI when those values change
  // const [students, setStudents] = useState([]);
  // const [editMode, setEditMode] = useState(false);
  // const [editableStudent, setEditableStudent] = useState(null);

  // Handlers are defined in child components:
  // - StudentForm: submitHandler, changeNameHandler, createHandler, updateHandler
  // - AllStudentList: editHandler, removeHandler, makePresentHandler, makeAbsentHandler
  // - StudentSection: togglelist

  // const makePresentHandler = (student) => {
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `Student is already marked as ${student.isPresent ? "Present" : "Absent"}`,
  //     );
  //   }

  //   const updatedStudentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: true };
  //     }
  //     return item;
  //   });
  //   setStudents(updatedStudentList);
  // };

  // const makeAbsentHandler = (student) => {
  //   if (student.isPresent !== undefined) {
  //     return alert(
  //       `Student is already marked as ${student.isPresent ? "Present" : "Absent"}`,
  //     );
  //   }

  //   const updatedStudentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: false };
  //     }
  //     return item;
  //   });
  //   setStudents(updatedStudentList);
  // };

  // const presentStudentlist = students.filter((student) => student.isPresent);
  // const absentStudentlist = students.filter(
  //   (student) => student.isPresent === false,
  // );

  // const togglelist = (student) => {
  //   const updatedStudentList = students.map((item) => {
  //     if (item.id === student.id) {
  //       return { ...item, isPresent: !item.isPresent };
  //     }
  //     return item;
  //   });
  //   setStudents(updatedStudentList);
  // };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center gap-3">
            <span className="text-5xl">📚</span>
            Student Attendance System
          </h1>
          <StudentForm
          // studentName={studentName}
          // setStudentName={setStudentName}
          // students={students}
          // setStudents={setStudents}
          // editMode={editMode}
          // setEditMode={setEditMode}
          // editableStudent={editableStudent}
          // setEditableStudent={setEditableStudent}
          />
        </div>
        <StudentSection
        // students={students}
        // setStudents={setStudents}
        // setStudentName={setStudentName}
        // editMode={editMode}
        // setEditMode={setEditMode}
        // setEditableStudent={setEditableStudent}
        />
      </div>
    </div>
  );
}

export default App;
