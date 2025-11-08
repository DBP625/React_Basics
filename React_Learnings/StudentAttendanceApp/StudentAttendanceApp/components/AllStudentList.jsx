import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AllStudentlist = () => {
  const {
    students,
    setStudents,
    setStudentName,
    setEditMode,
    editableStudent,
    setEditableStudent,
  } = useContext(StudentCtx);

  const editHandler = (student) => {
    setEditMode(true);
    setEditableStudent(student);
    setStudentName(student.name);
  };

  const removeHandler = (studentID) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentID,
    );
    setStudents(updatedStudentList);
  };

  const makePresentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `Student is already marked as ${student.isPresent ? "Present" : "Absent"}`,
      );
    }

    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: true };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const makeAbsentHandler = (student) => {
    if (student.isPresent !== undefined) {
      return alert(
        `Student is already marked as ${student.isPresent ? "Present" : "Absent"}`,
      );
    }

    const updatedStudentList = students.map((item) => {
      if (item.id === student.id) {
        return { ...item, isPresent: false };
      }
      return item;
    });
    setStudents(updatedStudentList);
  };

  const presentStudentlist = students.filter((student) => student.isPresent);
  const absentStudentlist = students.filter(
    (student) => student.isPresent === false,
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-3xl">👥</span>
        All Students
      </h2>
      <ul className="space-y-3">
        {students.length === 0 ? (
          <p className="text-gray-400 text-center py-8">
            No students added yet
          </p>
        ) : (
          students.map((student) => (
            <li
              key={student.id}
              className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-800 text-lg">
                  {student.name}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    student.isPresent === true
                      ? "bg-green-100 text-green-700"
                      : student.isPresent === false
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {student.isPresent === true
                    ? "✓ Present"
                    : student.isPresent === false
                      ? "✗ Absent"
                      : "⋯ Not Marked"}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => editHandler(student)}
                  className="flex-1 min-w-[80px] px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => removeHandler(student.id)}
                  className="flex-1 min-w-[80px] px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-medium"
                >
                  🗑️ Delete
                </button>
                <button
                  onClick={() => makePresentHandler(student)}
                  className="flex-1 min-w-[80px] px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={student.isPresent !== undefined}
                >
                  ✓ Present
                </button>
                <button
                  onClick={() => makeAbsentHandler(student)}
                  className="flex-1 min-w-[80px] px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={student.isPresent !== undefined}
                >
                  ✗ Absent
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AllStudentlist;
