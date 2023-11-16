import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Dribbble } from 'react-bootstrap-icons'

const Home_Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'first_template', form.current, 'pkfAn5YcoHBFodcrk')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }

  return (
    <section id='contact-container'>
      <form ref={form} onSubmit={sendEmail}>
        <h2>Contact Me!</h2>
        <p>Send me a message and I'll respond as fast as I can!</p>
        <span className='hr' />
        <div id='contact-grid'>
          <div className='name'>
            <label><h3>Name</h3></label>
            <input type="text" name="user_name" 
              required placeholder="Type full name here" />
          </div>
          <div className='email'>
            <label><h3>Email</h3></label>
            <input type="email" name="user_email" 
              required placeholder="Type email here" />
          </div>
          <div className='phone'>
            <label><h3>Phone Number</h3></label>
            <input type="tel" name="phone" 
              placeholder="Phone Number" 
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
          <div className='subject'>
            <label><h3>Subject</h3></label>
            <input type="text" name="subject" 
              required placeholder="Subject of message" />
          </div>
          <div className='message'>
            <label><h3>Message</h3></label>
            <textarea rows={5} name="message" 
              required placeholder="Type your message" />
          </div>
          <div className='submit'>
            <button><h3>Submit</h3></button>
          </div>
        </div>
      </form>
      <aside>
        <h2>Contact Information</h2>
        <span className='hr' />
        <ul>
          <li><h3>Contact Me</h3></li>
          <li><span>Wellington Region, New Zealand</span></li>
          <li><a href='mailto:ryangudsell@gmail.com'>ryangudsell@gmail.com</a></li>
        </ul>
        <span className='hr' />
        <ul>
          <li><h3>Social Media</h3></li>
          <li><a href=''><Github />GitHub</a></li>
          <li><a href=""><Linkedin />LinkedIn</a></li>
        </ul>
      </aside>
    </section>
  )
}

export default Home_Contact
