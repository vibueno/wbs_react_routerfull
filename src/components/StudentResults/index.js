import React from "react";
import "./index.css";

export default function StudentResults({ students, subjects }) {
  const getRandomGrade = () => {
    return Math.floor(Math.random() * Math.floor(10));
  };

  return (
    <>
      <h1>Grades</h1>
      <ul className="results-list">
        {students.map((student, index) => {
          return (
            <li key={index}>
              <strong>{student.name}: </strong>
              <ul className="grades-list">
                {subjects.map((subject) => {
                  return (
                    <li>
                      {subject}: {getRandomGrade()}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
