import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaStackOverflow,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <div>
      <ul className="social-icons">
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a href="http://facebook.com/">
            <FaFacebook className="icon" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a
            href="https://stackoverflow.com/users/13753389/pranay"
            target="blank"
          >
            <FaStackOverflow className="icon" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a
            href="https://www.linkedin.com/in/pranay-burra-3b55731aa/"
            target="blank"
          >
            <FaLinkedin className="icon" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a
            href="https://youtube.com/pranaytech?uid=LAUkbkB5XIkdSf604ZwQJw"
            target="blank"
          >
            <FaYoutube className="icon" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a href="https://www.instagram.com/prannuhh/" target="blank">
            <FaInstagram className="icon" />
          </a>
        </motion.li>
        <motion.li whileHover={{ y: -15, scale: 1.8 }}>
          <a href="https://github.com/pranaypr6" target="blank">
            <FaGithub className="icon" />
          </a>
        </motion.li>
      </ul>
    </div>
  );
};

export default SocialMedia;
