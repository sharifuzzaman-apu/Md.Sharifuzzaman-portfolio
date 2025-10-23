import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setStatus({ type: "error", message: "All fields are required." });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (!validatePhone(phone)) {
      setStatus({ type: "error", message: "Please enter a valid phone number (digits only)." });
      return;
    }

    // ✅ Simulate successful submission
    setStatus({ type: "success", message: "Your message has been sent successfully!" });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  // === Styles ===
  const sectionStyle = {
    padding: "80px 20px",
    background: "linear-gradient(to right, #0f0f0f, #272727)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "60px",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "left",
  };

  const leftStyle = {
    flex: "1",
    minWidth: "250px",
    maxWidth: "400px",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "20px",
    borderBottom: "3px solid #667eea",
    display: "inline-block",
    paddingBottom: "5px",
  };

  const infoText = {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#e0e0e0",
  };

  const highlight = {
    color: "#667eea",
    fontWeight: "600",
  };

  const formStyle = {
    flex: "1",
    minWidth: "280px",
    maxWidth: "450px",
    background: "linear-gradient(to right, #1a1a1a, #222)",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #555",
    backgroundColor: "#1c1c1c",
    color: "white",
    fontSize: "1rem",
    outline: "none",
    transition: "border 0.3s ease, box-shadow 0.3s ease",
  };

  const inputFocus = (e) => {
    e.target.style.border = "1px solid #667eea";
    e.target.style.boxShadow = "0 0 8px rgba(102,126,234,0.6)";
  };

  const inputBlur = (e) => {
    e.target.style.border = "1px solid #555";
    e.target.style.boxShadow = "none";
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
    transition: "all 0.3s ease",
  };

  const buttonHover = (e) => {
    e.target.style.backgroundColor = "#5561c5";
    e.target.style.transform = "scale(1.03)";
  };

  const buttonLeave = (e) => {
    e.target.style.backgroundColor = "#667eea";
    e.target.style.transform = "scale(1)";
  };

  const messageStyle = {
    marginTop: "15px",
    color: status.type === "error" ? "#ff6b6b" : "#4caf50",
    fontWeight: "600",
    textAlign: "center",
  };

  const socialLink = {
    display: "inline-block",
    marginRight: "15px",
    marginTop: "15px",
    color: "#667eea",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const handleHover = (e) => (e.target.style.color = "#8890f0");
  const handleLeave = (e) => (e.target.style.color = "#667eea");

  return (
    <section id="contact" style={sectionStyle}>
      {/* LEFT SIDE INFO */}
      <div style={leftStyle}>
        <h2 style={headingStyle}>Contact Me</h2>
        <p style={infoText}>
          <strong>Phone:</strong> <span style={highlight}>01762568008</span>
          <br />
          <strong>Email:</strong> <span style={highlight}>sharifapuzaman@gmail.com</span>
          <br />
          <br />
          I’m open to freelance projects, collaborations, or exciting job opportunities. Let’s
          connect and create something amazing together!
        </p>

        <div>
          <a href="https://github.com" style={socialLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            GitHub
          </a>
          <a href="https://linkedin.com" style={socialLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            LinkedIn
          </a>
          <a href="https://twitter.com" style={socialLink} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Twitter
          </a>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          style={inputStyle}
          onChange={handleChange}
          onFocus={inputFocus}
          onBlur={inputBlur}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          style={inputStyle}
          onChange={handleChange}
          onFocus={inputFocus}
          onBlur={inputBlur}
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          style={inputStyle}
          onChange={handleChange}
          onFocus={inputFocus}
          onBlur={inputBlur}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          style={inputStyle}
          onChange={handleChange}
          onFocus={inputFocus}
          onBlur={inputBlur}
        ></textarea>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={buttonHover}
          onMouseLeave={buttonLeave}
        >
          Send Message
        </button>
        {status.message && <p style={messageStyle}>{status.message}</p>}
      </form>
    </section>
  );
}
