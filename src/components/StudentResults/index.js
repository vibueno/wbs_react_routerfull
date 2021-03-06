import React from "react";
import { NavLink, useParams } from "react-router-dom";
import ButtonGoHome from "../ButtonGoHome";

import "./index.css";

export default function StudentResults({ students, subjects, goHome }) {
  const { studentId } = useParams();

  const getRandomGrade = () => {
    return Math.floor(Math.random() * Math.floor(10));
  };

  return (
    <>
      <h1>Grades</h1>
      <ul className="results-list">
        {(studentId
          ? students.filter((student) => student.id === parseInt(studentId))
          : students
        ).map((student, index) => {
          return (
            <li key={index}>
              <NavLink to={`/students/${student.id}`} className="student-link">
                <strong>{student.name}: </strong>
              </NavLink>
              <ul className="grades-list">
                {subjects.map((subject) => {
                  return (
                    <li key={`${subject}${index}`}>
                      {subject}: {getRandomGrade()}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>

      <ButtonGoHome />
    </>
  );
}
