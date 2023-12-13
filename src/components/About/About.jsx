import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>Development is Fun</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img
            src={require("../../images/pfp.png")}
            alt="Divyam"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
            className="aboutName"
          >
            Divyam Sirswal
          </Typography>
          <Typography
            variant="body1"
            style={{
              margin: "1vmax 0",
            }}
          >
            Full Stack Developer | Algorithm
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "1px",
              lineHeight: "35px",
              letterSpacing: "0px",
              textAlign: "left",
              fontFamily: "Roboto",
              fontWeight: "500",
              fontSize: "1.2vmax",
            }}
          >
            I am Divyam Sirswal, aspiring to pursue a career as a MERN (MongoDB,
            Express.js, React, Node.js) developer. Additionally, I have a keen
            interest in mastering the intricacies of Data Structures and
            Algorithms (DSA), and I am actively engaged in acquiring knowledge
            of contemporary technologies.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
