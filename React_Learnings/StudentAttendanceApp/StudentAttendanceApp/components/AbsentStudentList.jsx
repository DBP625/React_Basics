import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const AbsentStudentlist = () => {
  const { students, togglelist } = useContext(StudentCtx);

  return (
    <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-red-200">
      <h2 className="text-2xl font-bold text-red-800 mb-4 flex items-center gap-2">
        <span className="text-3xl">❌</span>
        Absent Students
        <span className="ml-auto bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          {students.filter((student) => student.isPresent === false).length}
        </span>
      </h2>
      <ul className="space-y-2">
        {students.filter((student) => student.isPresent === false).length ===
        0 ? (
          <p className="text-red-600 text-center py-8">
            No students marked absent
          </p>
        ) : (
          students
            .filter((student) => student.isPresent === false)
            .map((student) => (
              <li
                key={student.id}
                className="bg-white rounded-lg p-3 hover:bg-red-50 transition-colors duration-200 border border-red-200 flex items-center justify-between"
              >
                <span className="font-medium text-gray-800">
                  {student.name}
                </span>
                <button
                  onClick={() => togglelist(student)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 text-xs font-medium"
                >
                  ↺ Undo
                </button>
              </li>
            ))
        )}
      </ul>
    </div>
  );
};
export default AbsentStudentlist;
