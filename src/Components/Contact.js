

//const Contact = () => {
//    return <h1>Contact Me</h1>;
//  };
  
//  export default Contact;

import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:leonardoduor91@gmail.com?subject=Message from ${formData.name} (${formData.email})&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="leonardoduor@gmail.com"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Phone: <a href="tel:0790630415">0790630415</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/Leonard Oduor" target="_blank" rel="noopener noreferrer">Visit LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/Leonard-124" target="_blank" rel="noopener noreferrer">Visit GitHub</a></p>
      </div>
    </div>
  );
};

export default Contact;
