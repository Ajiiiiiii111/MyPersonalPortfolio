import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setIsSubmitted(true);
          form.reset();
        } else {
          alert("Something went wrong. Try again later.");
        }
      });
  };

  return (
    <div>
      {isSubmitted && <p className="success-message">Message sent successfully!</p>}
      <form id="contactform" onSubmit={handleSubmit}>
        <div className="inputbox">
          <input type="hidden" name="access_key" value="c24aa188-5d98-4072-89c0-b03026540c9f" />
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="number" name="number" placeholder="Number" required />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" required />
        <input type="submit" value="Send Message" className="btnsend" />
      </form>
    </div>
  );
};

export default Contact;
