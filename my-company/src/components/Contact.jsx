import React from 'react';
import { useState } from 'react';

 function Contact() {
  // State hooks for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

     const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: ''
     });

     const handleChange = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
       e.preventDefault();
       alert('Form submitted!');
     };

     return (
       <div style={{ color: "brown", border: "2px solid", padding: '20px' }}>
         <h1>Contact Us</h1>
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <input
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <textarea
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
             style={{ display: 'block', margin: '10px 0' }}
           />
           <button style={{ backgroundColor: "brown", color: "white" }} type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
