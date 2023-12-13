import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Us</Typography>
        <Typography>
          My name is <b>Divyam Sirswal</b>. I have a strong interest in modern
          technologies, and I am currently in a dedicated learning phase to
          enhance my proficiency in this field.
        </Typography>
        <Link to="/contact" className="footerContactBin">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Divyamsirswal" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/divyam_sirswal/" target="blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/divyam-sirswal-10a87524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
