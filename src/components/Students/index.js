import React from "react";
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
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.website}</td>
                <td>
                  {student.address.street} {student.address.suite}{" "}
                  {student.address.city} {student.address.zipcode}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
