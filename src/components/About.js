import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <h1>About me</h1>
      <Link to="/" className="details-link">
        Back
      </Link>
    </div>
  );
};

export default About;
