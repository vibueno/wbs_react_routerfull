import React from "react";
import { useHistory } from "react-router-dom";

import "./index.css";

export default function ButtonGoHome() {
  const history = useHistory();

  const goHome = () => {
    alert("Going back to the main page");
    history.push("/");
  };

  return (
    <button className="link" onClick={goHome}>
      Home
    </button>
  );
}
