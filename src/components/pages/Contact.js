import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pw7h2tk",
        "template_f47le4k",
        e.target,
        "user_0cCsPf5RcYc4vz0rslwmg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <hr />
      <div className="contact-form-card" id="Contact">
        <h2>CONTACT FORM</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="name-div">
            <label htmlFor="name">Name:</label>
            <input type="text" id="" placeholder="Full Name" name="name" />
          </div>
          <div className="email-div">
            <label htmlFor="email">Enter Your Email:</label>
            <input type="email" placeholder="Enter your email" name="email" />
          </div>
          <div className="msg-div">
            <label htmlFor="message">Enquiry type:</label>
            <textarea
              id="enquiry"
              cols="30"
              rows="10"
              placeholder="Leave me a message"
              name="enquiry"
            ></textarea>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </>
  );
}

export default Contact;
