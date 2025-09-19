import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-gray-300">
      
      <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main Street, Anytown USA</p>
          {/* You could also embed a contact form here */}
           <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send Message</button>
          </form> 
        </div>
    </section>
  );
}