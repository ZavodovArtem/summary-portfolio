import React, { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import emailjs from "emailjs-com";
import '../styles/Form.scss'

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();

  const serviceID = "service_9hd0q8a";
  const templateID = "template_3f1ns42";
  const userID = "6AdNquKGXKq43vhSe";

  const onSubmit: SubmitHandler<FieldValues> = (data, event) => {
    if (data && event) {
      emailjs.sendForm(serviceID, templateID, event.target as HTMLFormElement, userID)
        .then((res) => {
          console.log(res);
          setSuccessMessage("Message sent successfully!");
        }, (err) => {
          console.log(err);
        });
    }
  }

  return (
      <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="form-group-label" htmlFor="name">What is your name?</label>
          <input type="text" className="form-control" {...register("name", { required: true })} />
          {errors.name && <span className="error">This field is required</span>}
        </div>
        <div className="form-group">
          <label className="form-group-label" htmlFor="email">Email</label>
          <input type="email" className="form-control" {...register("email", { required: true })} />
          {errors.email && <span className="error">This field is required</span>}
        </div>
        <div className="form-group">
          <label className="form-group-label" htmlFor="message">Message</label>
          <textarea className="form-control + form-control-message" {...register("message", { required: true })} />
          {errors.message && <span className="error">This field is required</span>}
        </div>
        <button type="submit" className="form-btn"><p className="form-btn-p">Send</p></button>
        {successMessage && <p className="success">{successMessage}</p>}
      </form>
  );
};

export default ContactForm;
