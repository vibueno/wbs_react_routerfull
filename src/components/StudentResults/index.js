import React from "react";
import { NavLink } from "react-router-dom";

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
              <NavLink to={`/students/${student.id}`} className="student-link">
                <strong>{student.name}: </strong>
              </NavLink>
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