import { useContext } from "react";
import { StudentCtx } from "../contexts/Student";

import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";
const StudentSection = () => {
  // No longer need to destructure anything since child components get from context

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <AllStudentList />
      <PresentStudentList />
      <AbsentStudentList />
    </div>
  );
};
export default StudentSection;
