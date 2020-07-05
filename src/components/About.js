import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const detailsDivVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      when: "beforeChildren",
    },
    hover: {
      scale: 2,
    },
  },
};
const About = () => {
  return (
    <motion.div variants={detailsDivVariant}>
      <h1>Welcome!</h1>
      <h1>About me</h1>
      <Link to="/" className="details-link">
        Back
      </Link>
    </motion.div>
  );
};

export default About;
