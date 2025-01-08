import "./ContactMe.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
      // Reset the form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div style={{ marginTop: 30 }}>
      <button className="last">
        <h1 className="contact-title slide-in-left underline ml-[-1000px] mb-20">
          Contact Me
        </h1>
        <div className="flex" style={{ marginBottom: 20 }}>
          <div className="div1-contact">
            <div className="talk">Let's Talk</div>
            <div>
              I am currently available to work on new projects. Feel free to
              reach out at any time!
            </div>
            <div className="flex" style={{ marginTop: 28 }}>
              <div>
                <img
                  className="img-contact"
                  src="data:image/png;base64,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"
                  alt="email-icon"
                />
              </div>
              <div className="fos">thanmaipalla@gmail.com</div>
            </div>
            <div className="flex">
              <div>
                <img
                  className="img-contact"
                  src="data:image/jpeg;base64,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"
                  alt="phone-icon"
                />
              </div>
              <div className="fos">+91 94419 18650</div>
            </div>
            <div className="flex">
              <div>
                <img
                  className="img-contact"
                  src="data:image/png;base64,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"
                  alt="location-icon"
                />
              </div>
              <div className="fos">Your Location</div>
            </div>
          </div>
          <div className="div2-contact">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 14 }}>
                <label htmlFor="name">Name:</label>
                <input
                  style={{
                    border: "gray",
                    borderRadius: 2,
                    paddingRight: 10,
                  }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label htmlFor="email">Email:</label>
                <input
                  style={{
                    border: "gray",
                    borderRadius: 2,
                    paddingRight: 10,
                  }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{ marginBottom: 14 }}>
                <label htmlFor="message">Message:</label>
                <textarea
                  style={{
                    border: "gray",
                    borderRadius: 2,
                    paddingRight: 10,
                  }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="button-contact"
                type="submit"
                disabled={!isFormValid}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </button>
    </div>
  );
}

export default ContactMe;
