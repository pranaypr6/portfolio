import React from "react";
import { motion } from "framer-motion";

const Head = () => {
  return (
    <motion.div className="head">
      <h1 className="heading">Hello there!</h1>
      <img
        src={require("../assets/coding.svg")}
        alt=""
        style={{ paddingTop: "20px" }}
      />
    </motion.div>
  );
};

export default Head;
