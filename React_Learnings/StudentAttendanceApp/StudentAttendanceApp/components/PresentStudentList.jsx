import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

const PresentStudentList = () => {
  const { students, togglelist } = useContext(StudentCtx);

  const presentStudentlist = students.filter((student) => student.isPresent);

  const absentStudentlist = students.filter(
    (student) => student.isPresent === false,
  );

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-green-200">
      <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
        <span className="text-3xl">✅</span>
        Present Students
        <span className="ml-auto bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          {students.filter((student) => student.isPresent === true).length}
        </span>
      </h2>
      <ul className="space-y-2">
        {students.filter((student) => student.isPresent === true).length ===
        0 ? (
          <p className="text-green-600 text-center py-8">
            No students marked present
          </p>
        ) : (
          students
            .filter((student) => student.isPresent === true)
            .map((student) => (
              <li
                key={student.id}
                className="bg-white rounded-lg p-3 hover:bg-green-50 transition-colors duration-200 border border-green-200 flex items-center justify-between"
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
export default PresentStudentList;
