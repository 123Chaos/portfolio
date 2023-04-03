import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
// import useRef from "react";
// import emailjs from "emailjs-com";
const contact = () => {
  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_uy07bo4",
  //     "template_y7t77yg",
  //     form.current,
  //     "KTbGOm-msJ14OyunF"
  //   );
  // };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>799510721@qq.com</h5>
            <a href="mailto:799510721@qq.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>18582953747</h5>
            <a href="http://120.79.246.16/" target="_blank">
              Call ME
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Bilibili</h4>
            <h5>Aviditea</h5>
            <a href="https://bilibili.com" target="_blank">
              Bilibili ME
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name="name" placeholder="Full name" required />
          <input type="email" name="email" placeholder="Email here" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message here"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
