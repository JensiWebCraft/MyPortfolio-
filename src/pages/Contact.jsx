import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ozpr52o", // replace with your service ID
        "template_ftaar13", // replace with your template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "juGfiX7MxV3VtjZ1J", // replace with your public key (API key)
      )
      .then((result) => {
        toast.success(`Thank you ${form.name}, message sent successfully! ✅`);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(error.text);
        toast.error("Something went wrong. Please try again later.");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">
        Get in <span>touch</span>
      </h2>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <h3 className="lets-talk-title">
            <span className="purple">Let</span>
            <span className="orange">'s talk</span>
          </h3>
          <p className="contact-intro">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like to work on.
          </p>
          <div className="contact-line">
            <i className="fas fa-envelope"></i>
            <span>jensikachhadiy4@gmail.com</span>
          </div>
          <div className="contact-line">
            <i className="fas fa-phone-alt"></i>
            <span>+91 96620 75534</span>
          </div>
          <div className="contact-line">
            <i className="fas fa-map-marker-alt"></i>
            <span>Gujarat, India</span>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn-gradient submit-btn">
            Submit now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
