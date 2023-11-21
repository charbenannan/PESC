import React, { useState } from 'react';
import Brands from '../components/brands';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Nav from '../components/nav';
import { Reveal } from '../components/reveal';

export default function Contact() {
  const [values, setValues] = useState({});
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    
    if (!values.name || !values.email || !values.phone || !values.subject || !values.message) {
      
      setMessage('Please fill in all required fields.');
      return;
    }
    
    const formData = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      phone: values.phone,
      message: values.message,
    };

    fetch('http://localhost:8082/mailer/mailContactPage.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setMessage('Email sent successfully');
        setFormSubmitted(true);
        setValues({}); 
      })
      .catch((error) => {
        console.error(error);
        setMessage('Error sending email');
      });
  };


  

    return(
        <div className='Contact'>
             <div className='header-contact relative bg-cover bg-center h-screen w-screen' style={{ backgroundImage: 'url(../images/contact-banner.jpg)' }}>
        <div className="absolute inset-0 bg-[#DFEDDE] opacity-40"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black z-100 header">
         <Reveal>
          <h1 className="md:text-6xl text-4xl font-extrabold mb-4 mt-20 text-[#47126C]">CONTACT <span className='text-[#F43838]'>US</span> </h1>
          <p className="text-lg mb-8 text-black w-1/2 mx-auto">Connect with Us: Your Gateway to Exceptional Electrical Solutions and Service.</p>
          <p>HOME &raquo; <strong>CONTACT</strong></p>
        </Reveal>
        </div>
      </div>

            <div className="form">
            {formSubmitted ? (
          <div className="success-message p-4 bg-green-500 text-white rounded-lg shadow-md text-center my-4">
          {message}
        </div>
        
        ) : (
  <form  method="POST" onSubmit={handleSubmit}> 
    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-1/2 px-3 mb-0">
        <input
          type="text"
          placeholder="Name"
          name = "name"
          className="block w-full p-3 border-2 border-gray-300  focus:outline-none focus:border-[#47126C] focus:ring-2 focus:ring-[#47126C] focus:ring-opacity-50"
        required
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 px-3 mb-0">
        <input
          type="email"
          placeholder="Email"
          name ="email"
          className="block w-full p-3 border-2 border-gray-300  focus:outline-none focus:border-[#47126C] focus:ring-2 focus:ring-[#47126C] focus:ring-opacity-50"
        required
          onChange={handleChange}
        />
      </div>
    </div>

    <div className="flex flex-wrap -mx-3 mb-6">
      <div className="w-1/2 px-3 mb-0">
        <input
          type="text"
          placeholder="Phone Number"
          name ="phone"
          className="block w-full p-3 border-2 border-gray-300  focus:outline-none focus:border-[#47126C] focus:ring-2 focus:ring-[#47126C] focus:ring-opacity-50"
        required
          onChange={handleChange}
        />
      </div>
      <div className="w-1/2 px-3 mb-0">
        <input
          type="text"
          placeholder="Subject"
          name= "subject"
          className="block w-full p-3 border-2 border-gray-300  focus:outline-none focus:border-[#47126C] focus:ring-2 focus:ring-[#47126C] focus:ring-opacity-50"
        required
          onChange={handleChange}
        />
      </div>
    </div>

    <div className="mb-6">
      <textarea
        placeholder="Message"
        name ="message"
        className="block w-full p-3 border-2 border-gray-300  focus:outline-none focus:border-[#47126C] focus:ring-2 focus:ring-[#47126C] focus:ring-opacity-50"
      required
        onChange={handleChange}
      ></textarea>
    </div>

    <div className="text-center">
    <input
  type="submit"
  value="SEND"
  className="w-full sm:w-30 bg-[#F43838] text-white py-3 px-4 md:px-6 rounded-full hover:bg-[#47126C] cursor-pointer transition-colors duration-300 ease-in-out"
/>

    </div>
  </form>
        )}
</div>

 
<div className="contact-cards flex flex-col md:flex-row justify-center md:space-x-4 ml-5 mr-5 sm:ml-7 mr-7">
  
<div className="contact-card1 p-4 shadow-lg text-center m-4 md:w-80 cursor-pointer transform hover:scale-105 transition-transform duration-300">
  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
    <i className="fas fa-house text-[#47126C] text-6xl"></i>
  </div>
  <div>
    <h3 className="text-2xl font-bold">ADDRESS</h3>
    <p className="text-gray-500 mt-5">B\27, South McCarthy Hills, Besides Benjy’s Guest House – Accra South, Accra, Greater Accra </p>
  </div>
</div>

<div className="contact-card2 p-4 shadow-lg text-center m-4 md:w-80 cursor-pointer transform hover:scale-105 transition-transform duration-300">
  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
    <i className="fas fa-address-card text-[#47126C] text-6xl"></i>
  </div>
  <div>
    <h3 className="text-2xl font-bold">CONTACT</h3>
    <p className="text-gray-500 mt-5">+233 302 350183 <br /> +233 244 687054 </p>
  </div>
</div>

<div className="contact-card3 p-4 shadow-lg text-center m-4 md:w-80 cursor-pointer transform hover:scale-105 transition-transform duration-300">
  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
    <i className="fas fa-comments text-[#47126C] text-6xl"></i>
  </div>
  <div>
    <h3 className="text-2xl font-bold">FOLLOW US</h3>
    <p className="text-gray-500">Facebook</p>
    <p className="text-gray-500"><a href='https://www.linkedin.com/company/power-engineering-service-company-ltd/about/' target='_blank'>LinkedIn</a></p>
    <p className="text-gray-500">Twitter</p>
  </div>
</div>

</div>




<div className='google-map mt-10 mb-10 w-full'>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0331755370603!2d-0.29261792616009297!3d5.562101233590697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf981d384a4929%3A0xfb9cb282d34f0b21!2sBenjy&#39;s%20Lodge!5e0!3m2!1sen!2sgh!4v1700045481704!5m2!1sen!2sgh" width="100%" height="600" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>

        <Nav />
        <Banner />
        <Brands />
        <Footer />

        </div>
    )
}