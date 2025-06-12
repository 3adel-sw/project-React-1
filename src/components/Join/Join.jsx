import React, { useRef, useState, useEffect } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_adelsw", "template_wzqfim2", form.current, {
        publicKey: "9REShfxz6Q0JQb0pT",
      })
      .then(
        () => {
          setMessage("✅ Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          setMessage("❌ Failed to send email. Please try again.");
          console.error("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr className="hr" />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level up</span>
        </div>
        <div>
          <span>your body </span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            className="input"
            type="email"
            name="user_email"
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            value="Send"
            className="btn btn-warning text-white"
          >
            Join now
          </button>
        </form>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default Join;
// This code defines a React component for a "Join" section of a web application.
