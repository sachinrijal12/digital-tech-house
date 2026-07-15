import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!isConfigured) {
      setStatus(
        "The contact form is temporarily unavailable. Please try again later.",
      );
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey,
      )
      .then(() => {
        setStatus("Message sent successfully.");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <p className="section-subtitle">
          Tell us about your project. We'll get back to you as soon as possible.
        </p>

        <form className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p className="status" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
