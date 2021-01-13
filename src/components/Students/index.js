import React from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

export default function Students({ students }) {
  return (
    <>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>
                  <NavLink
                    to={`/students/${student.id}`}
                    className="student-link"
                  >
                    {student.name}
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    to={`/students/${student.id}`}
                    className="student-link"
                  >
                    {student.phone}
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    to={`/students/${student.id}`}
                    className="student-link"
                  >
                    {student.website}
                  </NavLink>
                </td>
                <td>
                  <NavLink
                    to={`/students/${student.id}`}
                    className="student-link"
                  >
                    {student.address.street} {student.address.suite}
                    {student.address.city} {student.address.zipcode}
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
