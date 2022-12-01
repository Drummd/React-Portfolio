import React from "react";
import '../../index.css';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vtwcz2f', 'template_67fhj77', form.current, 'BMdgRwxN5RsS1zhgI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          }, e.target.reset()
          );

      };
    
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>drummd043@gmail.com</h5>
                        <a href="mailto:drummd043@gmail.com">Send a message</a>

                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Full Name' required/>
                    <input email="email" name="email" placeholder="Email" required/>
                    <textarea name="message" rows="7" placeholder="Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact