import React from 'react';
import { useState } from 'react';

 function Contact() {
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
       <div className="min-h-screen pt-5 w-screen bg-[black] text-[white] p-6 mt-6">
         <h1 className="text-xl font-bold">Contact Us</h1>
         <form class="flex flex-col space-y-4 w-64 mx-auto mt-8" onSubmit={handleSubmit}>
            <input className="block my-[10px] text-black"
             type="text"
             name="name"
             placeholder="Your Name"
             value={formData.name}
             onChange={handleChange}
           />
           <input className="block my-[10px] text-black"
             type="email"
             name="email"
             placeholder="Your Email"
             value={formData.email}
             onChange={handleChange}
           />
           <textarea className="block my-[10px] text-black"
             name="message"
             placeholder="Your Message"
             value={formData.message}
             onChange={handleChange}
           />
           <button className="bg-white text-black font-bold rounded p-1 transition-all duration-200 hover:text-lg" type="submit">Send Message</button>
         </form>
       </div>
     );
   }

   export default Contact;
