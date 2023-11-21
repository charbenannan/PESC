import React from 'react';
import '../css/style.css';
import { Reveal } from './reveal';

export default function Footer() {
  return (
    <footer className="relative">
   
  <div className="footer relative">
    <img src="../images/footer.jpg" alt="footer" className="absolute top-0 left-0 w-full h-full object-cover z-1" />
    <div className="overlay absolute top-0 left-0 w-full h-full bg-[#111214] opacity-70"></div>

    <div className="relative z-10 sm:flex sm:justify-between sm:items-center px-4 py-7 text-white flex-col sm:flex-row">
      
      <div className="sm:w-1/2 sm:pr-16 mb-8 sm:mb-0 ml-10 text-center sm:text-left">
        <Reveal><h2 className="text-3xl font-semibold mb-4 text-center sm:text-left">Power Engineering Services</h2>
        <p className="mb-4">
        Energizing Tomorrow, Today – Powering Possibilities with Precision and Excellence. Your Trusted Partner in Electrical Solutions - Power Engineering Services Company Limited
        </p>
        </Reveal>
       
        <div className="socials flex space-x-4 justify-center sm:justify-start mt-5">
        
          <a href="#" className="text-[#042B78] hover:text-gray-400 w-12 h-12 flex items-center justify-center rounded-full bg-[#F5F5F5]">
          <Reveal>
            <i className="fab fa-facebook-f text-2xl"></i>
            </Reveal>
          </a>
          
          
          <a href="#" className="text-[#1DA1F2] hover:text-gray-400 w-12 h-12 flex items-center justify-center rounded-full bg-[#F5F5F5]">
          <Reveal>
            <i className="fab fa-twitter text-2xl"></i>
            </Reveal>
          </a>
          
          
          <a href="https://gh.linkedin.com/company/power-engineering-service-company-ltd?trk=public_profile_topcard-current-company" target="_blank" className="text-[#0077b5] hover:text-gray-400 w-12 h-12 flex items-center justify-center rounded-full bg-[#F5F5F5]">
          <Reveal>
            <i className="fab fa-linkedin-in text-2xl"></i>
            </Reveal>
          </a>
          
        </div>
        
      </div>

    
      <div className="right-footer sm:w-1/2 text-center">
        <h6 className="text-2xl font-semibold mb-4">Quick Links</h6>
        <hr className="border-t-2 border-[#F43838] mx-auto my-4" />
        <ul className="list-none">
          <li className="mb-2"><a href="/" className="text-white hover:text-gray-400">HOME</a></li>
          <li className="mb-2"><a href="/services" className="text-white hover:text-gray-400">OUR SERVICES</a></li>
          <li className="mb-2"><a href="/team" className="text-white hover:text-gray-400">OUR TEAM</a></li>
          <li className="mb-2"><a href="/about" className="text-white hover:text-gray-400">ABOUT US</a></li>
          <li className="mb-2"><a href="/contact" className="text-white hover:text-gray-400">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="copyright relative bg-black bg-opacity-100 text-white p-2 text-center">
    <p><span className='text-[#8E959B]'>© 2023 All Rights Reserved By </span>Power Engineering Services Co. Ltd</p>
  </div>
</footer>


  
  
  );
}
