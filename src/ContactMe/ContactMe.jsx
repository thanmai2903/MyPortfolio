import "./ContactMe.css";
import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact-section">

      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* LEFT */}
        <div className="contact-left">

          <h3 className="talk">Let's Talk</h3>

          <p className="desc">
            I am open to new opportunities and collaborations.
            Feel free to reach out anytime!
          </p>

          <div className="contact-info">
            <p>📧 thanmaipalla@gmail.com</p>
            <p>📞 +91 94419 18650</p>
            <p>📍 Andhra Pradesh, India</p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="input"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            className="button-contact"
            disabled={!isFormValid}
          >
            Send Message
          </button>

        </form>
      </div>

      {/* FOOTER */}
      <div className="contact-footer">
        <p>
          Follow me on{" "}
          <a href="https://github.com/thanmai2903">GitHub</a> &{" "}
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </p>
      </div>

    </section>
  );
}

export default ContactMe;