import { FormEvent, useState } from "react";

import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    axios.post("http://localhost:3000/api/contact", data)
      .then((res) => {
        console.log(res);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error(err);
        alert("Error sending message!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
