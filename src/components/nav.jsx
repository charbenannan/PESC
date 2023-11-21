import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../css/style.css';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 0) {
        controls.start({ top: -90, opacity: 0 });
      } else {
        controls.start({ top: 0, opacity: 1 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <>
      <motion.nav
        className={`navbar shadow-md w-full fixed top-0 left-0 ${open ? 'md:hidden mobile-bg' : ''}`}
        initial={{ top: 0, opacity: 1 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <div onClick={() => setOpen(!open)} className="text-3xl text-black absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <div className="md:flex items-center justify-between py-4 md:px-10 px-7 md-pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9">
          <a href="/">
            <img src="./images/logo.png" alt="Power Engineering" />
          </a>

          <ul className={`md:flex md:items-center transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 ${open ? 'md:hidden mobile-bg' : ''}`}>
            <li className="text-center md:ml-8 font-bold text-xl md:my-0 my-7 hover:text-gray-40 cursor-pointer">
              <a href="/" className="text-black hover:text-gray-400">
                HOME
              </a>
            </li>
            <li className="text-center md:ml-8 font-bold text-xl md:my-0 my-7 hover:text-gray-40 cursor-pointer">
              <a href="/services" className="text-black hover:text-gray-400">
                SERVICES
              </a>
            </li>
            <li className="text-center md:ml-8 font-bold text-xl md:my-0 my-7 hover:text-gray-40 cursor-pointer">
              <a href="/team" className="text-black hover:text-gray-400">
                OUR TEAM
              </a>
            </li>
            <li className="text-center md:ml-8 font-bold text-xl md:my-0 my-7 hover:text-gray-40 cursor-pointer">
              <a href="/about" className="text-black hover:text-gray-400">
                ABOUT US
              </a>
            </li>
            <li className="text-center md:ml-8 font-bold text-xl md:my-0 my-7 hover:text-gray-40 cursor-pointer">
              <a href="/contact" className="text-black hover:text-gray-400">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
