import React from 'react';
import './contact.css'; // Assuming you have a CSS file for styling


const Contact = () => {
  return (
    <div>
      <form id="contactform" action="https://api.web3forms.com/submit" method="POST">
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