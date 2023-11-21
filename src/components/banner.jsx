  import React from 'react';
  import { Text } from './text';

  export default function banner() {
    return (
      <div className="relative w-full h-screen">
        <img src="../images/banner.jpg" alt="banner" className="w-full h-full object-cover" />
      
   <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 bg-purple-800 opacity-40"></div>
          
          <h5 className="text-4xl font-semibold text-white mb-4 relative z-10"><Text>Do You Need A Trusted Electrical Engineer?</Text></h5>
          <h5 className="text-2xl text-white mb-6 relative z-10"><Text>Look no further than Power Engineering Services Co. Ltd</Text></h5>
      

          <div className="contact-details flex flex-col items-center text-white relative z-10">
            <h5 className="text-lg mb-2"><Text>Contact US</Text></h5>
            <i className="fas fa-phone text-xl mb-2"></i>
            <h5 className="text-lg mb-2"><Text>+233 302 350183</Text></h5>
            <i className="fas fa-envelope text-xl mb-2"></i>
            <h5 className="text-lg"><Text>pwr_services2@yahoo.com</Text></h5>
          </div>
        </div>

      </div> 
    );
  }
