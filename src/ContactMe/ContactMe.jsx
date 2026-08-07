import "./ContactMe.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
      subject: "",
    message: "",
  });

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_h8op3xn",
  "template_rfrl3ic",
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
        "BzLhPsr_N0VYtTFg8"
    );

toast.success(
  "Thank you! Your message has been sent successfully.",
  {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  }
);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
toast.error(
  "Unable to send your message. Please try again later.",
  {
    position: "top-right",
    autoClose: 3000,
    theme: "colored",
  }
);
  }
};

  return (

<section className="contact-section" id="contact">

  <div className="contact-wrapper">

    {/* =========================
          TITLE
    ========================= */}

    <div className="contact-header">

    <h2 className="contact-title">
        Contact Me
    </h2>

    <div className="contact-line"></div>

    <p className="contact-subtitle">
        Whether you're hiring, looking for a Full Stack Developer,
        interested in collaborating on a project, or simply want to
        connect, I'd love to hear from you.
    </p>

    <span className="availability-badge">
        <span className="dot"></span>
        Available for Opportunities
    </span>

</div>

    {/* =========================
          MAIN GRID
    ========================= */}

    <div className="contact-container">

      {/* ======================================
                  LEFT CARD
      ====================================== */}

      <div className="contact-left">

        <h3 className="left-title">
          Get In Touch
        </h3>

        <p className="left-description">
          Whether you're hiring, collaborating on a project,
          or simply want to connect, I'd be happy to hear
          from you. I usually reply within 24 hours.
        </p>

        {/* Contact Cards */}

        <div className="contact-details">

          <div className="contact-card">

            <div className="contact-icon">
              📧
            </div>

            <div>

              <h4>Email</h4>

              <p>
                thanmaipalla@gmail.com
              </p>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              📱
            </div>

            <div>

              <h4>Phone</h4>

              <p>
                +91 94419 18650
              </p>

            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              📍
            </div>

            <div>

              <h4>Location</h4>

              <p>
                Andhra Pradesh, India
              </p>

            </div>

          </div>

        </div>

        {/* Quick Response */}

        <div className="response-box">

          <h4>
            ⚡ Quick Response
          </h4>

          <p>
            Usually responds within 24 hours.
          </p>

        </div>

        {/* Social Links */}

        <div className="social-links">

          <a
            href="https://github.com/thanmai2903"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/thanmai-palla-09565b2b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
          >
            Resume
          </a>

        </div>

      </div>

      {/* ======================================
              RIGHT SIDE FORM
      ====================================== */}

      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >
                {/* ===========================
              NAME
        =========================== */}

        <div className="input-group">

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="John Doe"
            className="input"
            value={formData.name}
            onChange={handleChange}
            required
          />

        </div>

        {/* ===========================
              EMAIL
        =========================== */}

        <div className="input-group">

          <label>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />

        </div>

        {/* ===========================
              SUBJECT
        =========================== */}

        <div className="input-group">

          <label>
            Subject
          </label>

          <input
  type="text"
  name="subject"
  placeholder="Hiring for Full Stack Developer"
  className="input"
  value={formData.subject}
  onChange={handleChange}
/>

        </div>

        {/* ===========================
              MESSAGE
        =========================== */}

        <div className="input-group">

          <label>
            Message
          </label>

          <textarea
            name="message"
            rows="7"
            placeholder="Hello Thanmai,

I came across your portfolio and would like to discuss an opportunity..."
            className="input textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />

        </div>

        {/* ===========================
              BUTTON
        =========================== */}

        <button
          type="submit"
          className="button-contact"
          disabled={!isFormValid}
        >
          Send Message →
        </button>

      </form>

    </div>

    {/* ===========================
          BOTTOM INFO
    =========================== */}

    <div className="contact-bottom">

      <div className="bottom-divider"></div>

      <h3>
        Open to Full Stack Developer Opportunities
      </h3>

      <p>
        Thank you for visiting my portfolio.
        Whether you're a recruiter, hiring manager,
        developer or student, I'd love to connect and
        discuss exciting opportunities.
      </p>

      <div className="bottom-links">

        <a
          href="mailto:thanmaipalla@gmail.com"
          className="bottom-btn"
        >
           Email
        </a>

        <a
          href="https://github.com/thanmai2903"
          target="_blank"
          rel="noreferrer"
          className="bottom-btn"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/thanmai-palla-09565b2b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noreferrer"
          className="bottom-btn"
        >
          LinkedIn
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bottom-btn"
        >
          Resume
        </a>

      </div>

    </div>
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>


  </div>

</section>

);
}

export default ContactMe;
