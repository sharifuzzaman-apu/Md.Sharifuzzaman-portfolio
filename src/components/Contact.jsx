import React, { useState } from "react";
import "./Contact.css";
import Modal from "./Modal";

export default function Contact() {
  // include whatsapp
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", whatsapp: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s-]{6,15}$/; // allow digits, spaces, dashes for local part

    // Name: required, small minimum length
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Please enter a full name";

    // Email: required + format
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";

    // Phone: keep as required and validate formatting loosely
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Enter a valid phone number";

    // WhatsApp: required only (no extra format validation per request)
    if (!formData.whatsapp || !formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";

    // Message: required and minimum length for meaningful messages
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    else if (formData.message.trim().length < 10) newErrors.message = "Message is too short";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // helper to encode form data for x-www-form-urlencoded post
  const encode = (data) =>
    Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmitting(true);

    // Prepare form data for Netlify
    const body = encode({ "form-name": "contact", ...formData });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (res.ok) {
        setSubmitted(true);
        // Optionally clear the form
        setFormData({ name: "", email: "", phone: "", whatsapp: "", message: "" });
        setErrors({});
      } else {
        // Treat non-OK as an error
        setErrors((prev) => ({ ...prev, submit: "Submission failed. Please try again." }));
      }
    } catch (err) {
      console.error(err);
      setErrors((prev) => ({ ...prev, submit: "Network error — please try again." }));
    } finally {
      setSubmitting(false);
    }
  };


  // Ensure the Email button reliably opens the user's mail client
  const handleEmailClick = (e) => {
    e.preventDefault();
    const mailto = "mailto:sharifapuzaman@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Sharif%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";
    // Use location.href which works reliably across browsers and respects user's mail client
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="contact-card contact-info">
          <div className="info-head">
            <div className="info-avatar">SA</div>
            <div className="info-meta">
              <h2 className="contact-title">Sharifuzzaman Apu</h2>
              <div className="info-role">FrontEnd Web Developer</div>
            </div>
          </div>

          <p className="contact-sub">I’m open to freelance projects, collaborations, or exciting job opportunities. Let’s build something great together.</p>

          <ul className="contact-list" aria-label="Contact details">
            <li>
              <span className="ci-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.46V19a2 2 0 0 1-2 2c-9.39 0-17-7.61-17-17A2 2 0 0 1 6 2h3.54a1 1 0 0 1 1 .75c.28 1.36.86 2.66 1.72 3.83a1 1 0 0 1-.25 1.36L9.7 10.7a12.1 12.1 0 0 0 5.6 5.6l1.78-2.1a1 1 0 0 1 1.36-.25c1.17.86 2.47 1.44 3.83 1.72a1 1 0 0 1 .75 1V15.46z" fill="currentColor"/></svg>
              </span>
              <div>
                <div className="ci-label">Phone</div>
                <a className="ci-link" href="tel:+8801762568008">+88 01762 568008</a>
              </div>
            </li>

            <li>
              <span className="ci-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="ci-label">Email</div>
                <a className="ci-link" href="mailto:sharifapuzaman@gmail.com">sharifapuzaman@gmail.com</a>
              </div>
            </li>

            <li>
              <span className="ci-icon" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              <div>
                <div className="ci-label">Location</div>
                <div className="ci-text">Dhaka, Bangladesh</div>
              </div>
            </li>
          </ul>

          <div className="contact-social">
            <a className="social-link" href="https://github.com/sharifuzzaman-apu" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.93.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0112 6.8c.85.004 1.71.115 2.5.338 1.9-1.3 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.02 1.6 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" fill="currentColor"/></svg>
            </a>
            <a className="social-link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2zM4 3a2 2 0 110 4 2 2 0 010-4z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          <div className="contact-ctas">
            <a
              className="whatsapp-btn"
              href="https://wa.me/8801762568008?text=Hi%20Sharif%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20chat"
              target="_blank"
              rel="noreferrer"
              aria-label="Message on WhatsApp"
            >
              <svg className="whatsapp-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.78 11.78 0 0012 1C6.48 1 2 5.48 2 11c0 1.93.5 3.73 1.43 5.33L2 23l6.94-1.41A11.97 11.97 0 0012 23c5.52 0 10-4.48 10-10 0-1.69-.4-3.28-1.48-4.52z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M17.5 14.5c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.77.98-.94 1.18-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.5-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.33.45-.5.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.26-.25-.59-.5-.51-.68-.52l-.58-.01c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.44 1.05 2.83 1.2 3.03.15.2 2.08 3.4 5.05 4.77 2.97 1.38 2.97.92 3.51.86.54-.06 1.78-.72 2.03-1.41.25-.69.25-1.28.17-1.4-.08-.12-.28-.2-.58-.35z" fill="currentColor"/></svg>
              WhatsApp Me
            </a>

            <a
              className="email-btn"
              href="mailto:sharifapuzaman@gmail.com?subject=Inquiry%20from%20Portfolio&body=Hi%20Sharif%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
              onClick={handleEmailClick}
              aria-label="Send email"
            >
              <svg className="email-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.5A2.5 2.5 0 015.5 4h13A2.5 2.5 0 0121 6.5v11A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 18.5v-12z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 6.5l-9 6-9-6" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Email Me
            </a>
          </div>

        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="contact-card contact-form"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="sr-only">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>

          <div className="form-grid">
            <div className={`form-field ${formData.name ? 'filled' : ''}`}>
              <label htmlFor="name">Name</label>
              <div className="input-wrap">
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zM4 20c0-3.3 4.7-5 8-5s8 1.7 8 5v1H4v-1z" fill="currentColor"/></svg>
                <input id="name" name="name" type="text" aria-label="Your name" value={formData.name} onChange={handleChange} className={errors.name ? 'input error' : 'input'} />
              </div>
              {errors.name && <div className="field-error">{errors.name}</div>}
            </div>

            <div className={`form-field ${formData.email ? 'filled' : ''}`}>
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v12H4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input id="email" name="email" type="email" aria-label="Your email" value={formData.email} onChange={handleChange} className={errors.email ? 'input error' : 'input'} />
              </div>
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>

            <div className={`form-field ${formData.phone ? 'filled' : ''}`}>
              <label htmlFor="phone">Phone</label>
              <div className="input-wrap">
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15.46V19a2 2 0 0 1-2 2c-9.39 0-17-7.61-17-17A2 2 0 0 1 6 2h3.54a1 1 0 0 1 1 .75c.28 1.36.86 2.66 1.72 3.83a1 1 0 0 1-.25 1.36L9.7 10.7a12.1 12.1 0 0 0 5.6 5.6l1.78-2.1a1 1 0 0 1 1.36-.25c1.17.86 2.47 1.44 3.83 1.72a1 1 0 0 1 .75 1V15.46z" fill="currentColor"/></svg>
                <input id="phone" name="phone" type="tel" aria-label="Your phone" value={formData.phone} onChange={handleChange} className={errors.phone ? 'input error' : 'input'} />
              </div>
              {errors.phone && <div className="field-error">{errors.phone}</div>}
            </div>

            <div className={`form-field ${formData.whatsapp ? 'filled' : ''}`}>
              <label htmlFor="whatsapp">WhatsApp</label>
              <div className="input-wrap">
                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15.46V19a2 2 0 0 1-2 2c-9.39 0-17-7.61-17-17A2 2 0 0 1 6 2h3.54a1 1 0 0 1 1 .75c.28 1.36.86 2.66 1.72 3.83a1 1 0 0 1-.25 1.36L9.7 10.7a12.1 12.1 0 0 0 5.6 5.6l1.78-2.1a1 1 0 0 1 1.36-.25c1.17.86 2.47 1.44 3.83 1.72a1 1 0 0 1 .75 1V15.46z" fill="currentColor"/></svg>
                <input id="whatsapp" name="whatsapp" type="tel" aria-label="Your WhatsApp" required value={formData.whatsapp} onChange={handleChange} className={errors.whatsapp ? 'input error' : 'input'} />
              </div>
              {errors.whatsapp && <div className="field-error">{errors.whatsapp}</div>}
            </div>

            <div className={`form-field textarea ${formData.message ? 'filled' : ''}`} style={{gridColumn: '1 / -1'}}>
              <label htmlFor="message">Message</label>
              <div className="input-wrap">
                <textarea id="message" name="message" rows={5} aria-label="Your message" value={formData.message} onChange={handleChange} className={errors.message ? 'input error' : 'input'} />
              </div>
              {errors.message && <div className="field-error">{errors.message}</div>}
            </div>
          </div>

          <div className="form-cta">
            <button type="submit" className="btn-submit" aria-label="Send message" disabled={submitting}>
              {submitting ? "Sending..." : "Send Message"}
            </button>
            <div className="submit-area" aria-live="polite">
              {submitted ? <span className="submit-success">✅ Sent — thanks!</span> : null}
              {errors.submit ? <div className="field-error">{errors.submit}</div> : null}
            </div>
          </div>
          {submitted && (
            <Modal
              visible={submitted}
              title={"Thank you"}
              message={"Your message has been sent. I will get back to you as soon as possible."}
              primary={"Close"}
              onPrimary={() => setSubmitted(false)}
              onClose={() => setSubmitted(false)}
            />
          )}
        </form>
      </div>
    </section>
  );
}
