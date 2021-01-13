import React from "react";
import { useParams, NavLink } from "react-router-dom";

import "./index.css";

export default function StudentProfile({ getStudentInfo }) {
  const { studentId } = useParams();

  const studentInfo = getStudentInfo(studentId);

  return (
    <>
      <h1>Student profile</h1>
      <div className="student-info">
        {studentInfo ? (
          <div>
            <div>
              <strong>Name: </strong> {studentInfo.name}
            </div>
            <div>
              <strong>E-mail: </strong> {studentInfo.email}
            </div>
            <div>
              <strong>Phone: </strong> {studentInfo.phone}
            </div>
            <div>
              <strong>Address: </strong>
              {`${studentInfo.address.street}
              ${studentInfo.address.suite}
              ${studentInfo.address.city} ${studentInfo.address.zipcode}`}
            </div>
            <div>
              <strong>Website: </strong> {studentInfo.website}
            </div>
          </div>
        ) : null}
        <NavLink to={`/results/${studentInfo.id}`} className="results-link">
          See results
        </NavLink>
      </div>
    </>
  );
}
