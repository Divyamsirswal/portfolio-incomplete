import React, { useState } from "react";
import "./Contact.css";
import { Button, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const conactFormHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactConatiner">
        <form className="contactContainerForm" onSubmit={conactFormHandler}>
          <Typography variant="h4" fontFamily="Nunito" fontWeight="700">
            Contact Us
          </Typography>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
