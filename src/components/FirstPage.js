import React from "react";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h1>This is Pranaykumar</h1>
      <ul className="details">
        <li>
          <Link to="/about" className="details-link">
            About me
          </Link>
        </li>
        <li>
          <Link to="projects" className="details-link">
            My Projects
          </Link>
        </li>
        <li>
          <Link to="education" className="details-link">
            Education
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FirstPage;
