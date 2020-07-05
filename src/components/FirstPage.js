import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typed from "react-typed";

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

const childVariant = {
  hover: {
    x: 15,
  },
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 150,
    },
  },
};

const FirstPage = () => {
  return (
    <motion.div variants={detailsDivVariant} animate="visible" initial="hidden">
      <h1>
        <Typed
          strings={["Welcome! , this is", " PranayKumar, Web developer . . ."]}
          typeSpeed={100}
        />
      </h1>
      <ul className="details">
        <motion.li variants={childVariant} whileHover="hover">
          <Link to="/about" className="details-link">
            About me
          </Link>
        </motion.li>
        <motion.li variants={childVariant} whileHover="hover">
          <Link to="projects" className="details-link">
            My Projects
          </Link>
        </motion.li>
        <motion.li variants={childVariant} whileHover="hover">
          <Link to="education" className="details-link">
            Education
          </Link>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default FirstPage;
