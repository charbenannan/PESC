import React, {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/nav';
import Brands from '../components/brands';
import Footer from '../components/footer';
import '../css/style.css'
import { Reveal } from '../components/reveal';
import {Text} from '../components/text'


 

export default function Home(){

    const navigate = useNavigate();
    
    const [values, setValues] = useState({ hours: 0, clients: 0, projects: 0 });
    const [isCounting, setIsCounting] = useState(false);
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const refHours = useRef(0);
    const refClients = useRef(0);
    const refProjects = useRef(0);
  
    const endHours = 400;
    const endClients = 30;
    const endProjects = 70;
  
    const accumulatorHours = endHours / 100;
    const accumulatorClients = endClients / 50000;
    const accumulatorProjects = endProjects / 100;
  
    const updateCounterState = () => {
      if (refHours.current < endHours) {
        let resultHours = Math.ceil(refHours.current + accumulatorHours);
        if (resultHours > endHours) {
          resultHours = endHours;
        }
        setValues((prevValues) => ({ ...prevValues, hours: resultHours }));
        refHours.current = resultHours;
      }
  
      if (refClients.current < endClients) {
        let resultClients = Math.ceil(refClients.current + accumulatorClients);
        if (resultClients > endClients) {
          resultClients = endClients;
        }
        setValues((prevValues) => ({ ...prevValues, clients: resultClients }));
        refClients.current = resultClients;
      }
  
      if (refProjects.current < endProjects) {
        let resultProjects = Math.ceil(refProjects.current + accumulatorProjects);
        if (resultProjects > endProjects) {
          resultProjects = endProjects;
        }
        setValues((prevValues) => ({ ...prevValues, projects: resultProjects }));
        refProjects.current = resultProjects;
      }
  
      if (
        refHours.current < endHours ||
        refClients.current < endClients ||
        refProjects.current < endProjects
      ) {
        requestAnimationFrame(updateCounterState);
      }
    };
  
    const observerRef = useRef();
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
      };
  
      const handleIntersection = (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !isCounting) {
          setIsCounting(true);
          updateCounterState();
        }
      };
  
      observerRef.current = new IntersectionObserver(handleIntersection, options);
      observerRef.current.observe(document.querySelector('.home-banner'));


  
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, [isCounting]);
  
    ;

    const handleSubmit = (e) => {
      e.preventDefault();

      if (!values.name || !values.email || !values.phone || !values.message) {
      
        setMessage('Please fill in all required fields.');
        return;
      }
    
     
      console.log(values);
    
      
      const formData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      };
    

      console.log(formData);
    
      
      fetch('http://localhost:8082/mailer/mail.php', {
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
    
    

     const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
    
    
    

    return (
      
        <div className='Home bg-gray-100'>
            
        <div className="home-background relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(../images/home.jpg)' }}>
  <div className="absolute inset-0 bg-[#DFEDDE] opacity-60"></div>
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-100 header">
   <Reveal>
    <h1 className="md:text-6xl text-4xl font-bold mb-4 mt-20 text-[#47126C]">POWER ENGINEERING <br /><span className="text-[#F43838]">SERVICES CO. LTD</span></h1>
    <p className="text-lg mb-8 mt-8 text-black w-1/2 mx-auto"> We are electrical contractors and suppliers to satisfy the urgent needs of customers by providing professional, quality and custom-made services in the competitive field of electrical engineering</p>
  </Reveal> 
    <button onClick={() => navigate("/services")} className="btn-orange text-white bg-purple-500 hover-bg-purple-400">Services</button>
  
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
  <div className="field bg-[#47126C] flex p-6">
    <i className="fa-solid fa-bolt-lightning fa-beat-fade text-7xl text-white mt-2 h-full"></i>
    <Reveal>
      <div className="ml-4 mr-4">
        <h2 className="text-3xl font-semibold mt-2 text-white">Low and High Voltage Works</h2>
        <p className="text-lg mt-3 text-white overflow-hidden whitespace-normal">
          Discover excellence in electrical solutions with our firm. Specializing in low voltage for homes and businesses, as well as high voltage projects for industries, we excel in design, installation, and maintenance.
        </p>
      </div>
    </Reveal>
  </div>

  <div className="field bg-[#F43838] flex p-6">
    <i className="fas fa-charging-station fa-bounce text-7xl text-white mt-2 h-full"></i>
    <Reveal>
      <div className="ml-4 mr-4">
        <h2 className="text-3xl font-semibold mt-2 text-white">Electrical Installations</h2>
        <p className="text-lg mt-3 text-white overflow-hidden whitespace-normal">
          Electrical conduit, cable & accessories installations | Dedicated transformer, generator, and inverter installations | Networking, data, telephone, fire alarm, and security systems installations including burglar alarms and CCTV.
        </p>
      </div>
    </Reveal>
  </div>

  <div className="field bg-[#47126C] flex p-6">
    <i className="fa-solid fa-fan fa-flip text-7xl text-white mt-2 h-full"></i>
    <Reveal>
      <div className="ml-4 mr-4">
        <h2 className="text-3xl font-semibold mt-2 text-white">Maintenance Works</h2>
        <p className="text-lg mt-3 text-white overflow-hidden whitespace-normal">
          Ensure reliability, compliance, and efficiency with our trusted expertise. Experience seamless design, precise installation, and reliable maintenance for all your electrical needs, appliances and existing services.
        </p>
      </div>
    </Reveal>
  </div>
</div>


<Reveal>  
    <div className="services bg-gray-100 py-20">
      <div className="container mx-auto text-center">
      
        <h2 className="text-5xl font-semibold mb-8 text-black text-center sm:text-3xl">OUR SERVICES</h2>
        <hr className="border-t-2 border-[#F43838] mx-auto mb-8 " />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="card bg-white shadow-lg p-6 mr-7 ml-7  hover:scale-105 transition-transform duration-300">
            <div className="icon-background bg-[#47126C] p-4 rounded-full mx-auto mb-4 w-20 h-20 text-white">
              <i className="fa-solid fa-truck text-4xl"></i>
            </div>
            <Reveal>
            <h3 className="text-xl font-semibold mb-4 text-[#F43838] w-1/2 mx-auto">Supply Only, With Manuals</h3>
            <p className="text-gray-700 w-1/2 mx-auto">Empower your projects with our supply-only service, complete with comprehensive manuals:
Explore top-tier products for electrical conduit, cable & accessories, transformers, generators, inverters, networking, data, telephone, fire alarms, and security systems—enhancing your installation experience with detailed manuals for seamless operation.</p>
            </Reveal> 
          </div>

          <div className="card bg-white shadow-lg p-6 mr-7 ml-7 hover:scale-105 transition-transform duration-300">
            <div className="icon-background bg-[#47126C] p-4 rounded-full mx-auto mb-4 w-20 h-20 text-white">
              <i className="fas fa-cogs text-4xl"></i>
            </div>
            <Reveal>
            <h3 className="text-xl font-semibold mb-4 text-[#F43838] w-1/2 mx-auto">Maintenance Works</h3>
            <p className="text-gray-700 w-1/2 mx-auto">Ensure the longevity of your electrical systems with our expert maintenance services:

Trust us for routine check-ups, repairs, and proactive maintenance of electrical conduit, cables, transformers, generators, inverters, networking, data systems, fire alarms, security installations, and more. Keep your operations running smoothly with our dedicated maintenance works.</p>
         </Reveal>
          </div>
          

          <div className="card bg-white shadow-lg p-6 mr-7 ml-7 hover:scale-105 transition-transform duration-300">
            <div className="icon-background bg-[#47126C] p-4 rounded-full mx-auto mb-4 w-20 h-20 text-white">
              <i className="fas fa-wrench text-4xl"></i>
            </div>
            <Reveal>
            <h3 className="text-xl font-semibold mb-4 text-[#F43838] w-1/2 mx-auto">Advisory, Supply And Install Services, With As-Built Drawings</h3>
            <p className="text-gray-700 w-1/2 mx-auto">Experience comprehensive solutions with our advisory, supply, and install services, enriched by meticulous as-built drawings:

From expert advice to seamless installations of electrical conduit, transformers, generators, inverters,telephone, fire alarms, and security systems—our commitment includes detailed as-built drawings for enduring clarity and reference.</p>
            </Reveal>
          </div>

          <div className="card bg-white shadow-lg p-6 mr-7 ml-7  hover:scale-105 transition-transform duration-300">
            <div className="icon-background bg-[#47126C] p-4 rounded-full mx-auto mb-4 w-20 h-20 text-white">
              <i className="fas fa-drafting-compass text-4xl"></i>
            </div>
            <Reveal>
            <h3 className="text-xl font-semibold mb-4 text-[#F43838] w-1/2 mx-auto">Supply and Install Services, With As-Built Drawings</h3>
            <p className="text-gray-700 w-1/2 mx-auto">Elevate your projects with our end-to-end supply and install services, accompanied by detailed as-built drawings:
From electrical conduit, transformers, generators, inverters, telephone, fire alarms, and security systems—experience seamless installations complemented by precise as-built drawings for enhanced transparency and future reference.</p>
            </Reveal>
          </div>

          
        </div>

        
      </div>
    </div>
    </Reveal>
    <div className='text-center'>
    <button onClick={() => navigate("/services")} className="btn-orange text-white   mb-10 ">
          READ MORE
        </button>
        </div>

        <div className="home-banner relative bg-cover bg-center h-screen md:h-80"
 style={{ backgroundImage: 'url(../images/home-banner.jpg)' }}>
    <div className='icons p-10 text-white  md:flex justify-between mx-auto text-center'>
        <div className='text-bold mt-5 '>
        <i className="fa-solid fa-business-time text-7xl"></i>
            <h1 className='number text-5xl md:text-7xl md:mt-2'>{values.hours}+</h1>
            <p className='hours text-3xl'>Hours</p>
         </div>

         <div className='text-bold mt-5 md:mt-5'>
         <i className="fa-solid fa-user-tie text-7xl"></i>
            <h1 className='number text-5xl md:text-7xl md:mt-2'>{values.clients}+</h1>
            <p className='clients text-3xl'> Satisfied Clients</p>
            </div>

        <div className='text-bold mt-5 md:mt-5'>
        <i className="fa-solid fa-clipboard-check text-7xl"></i>
            <h1 className='number text-5xl md:text-7xl md:m-2'>{values.projects}+</h1>
            <p className='projects text-3xl'>Completed Projects</p>
        </div>
        </div>
    </div>

    <Reveal>  
    <div className='our-team bg-gray-100 py-10 mt-32'>
  <h2 className='text-5xl font-semibold text-center text-black sm:text-3xl'>OUR TEAM</h2>
  <hr className='border-t-2 border-[#F43838] mx-auto mb-8 mt-8' />

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5 mr-5'>
   

    <div className='team-member'>
      <img src='../images/Jacob.jpg' alt='CEO' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold text-white'>Jacob Kobla Avor</p>
        <p className='text-gray-600 text-white'>Chief Executive Officer</p>
      </div>
    </div>

    <div className='team-member'>
    <img src='../images/person.jpg' alt='person' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold text-white'>Kojo Sackey</p>
        <p className='text-gray-600 text-white'>Finance Director</p>
      </div>
    </div>

    <div className='team-member'>
    <img src='../images/person.jpg' alt='person' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold  text-white'>Evelyn Esi Sarfoa Acquah</p>
        <p className='text-gray-600 text-white'>Executive Administrator</p>
      </div>
    </div>
    <div className='team-member'>
    <img src='../images/person.jpg' alt='person' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold  text-white'>Ababio Gyasi</p>
        <p className='text-gray-600 text-white'>Technical Engineer</p>
      </div>
    </div>

    <div className='team-member'>
    <img src='../images/person.jpg' alt='person' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold  text-white'>Bernard Kwabena Ameyaw</p>
        <p className='text-gray-600 text-white'>Information Technology Engineer</p>
      </div>

      
    </div>
    <div className='team-member'>
    <img src='../images/person.jpg' alt='person' className='w-full ' />
      <div className='name text-lg mt-2 bg-[#47126C] text-center'>
        <p className='text-[#47126C] font-semibold  text-white'>Isaac Armah</p>
        <p className='text-gray-600 text-white'>Technical Supervisor</p>
      </div>
    </div>
  </div>
</div>
</Reveal>


<div className='about-us bg-gray-100 mt-32'>

  <h2 className='text-5xl font-semibold text-center text-black sm:text-3xl'>ABOUT US</h2>
  <hr className='border-t-2 border-[#F43838] mx-auto my-8' />


  <div className='about-usdets relative bg-cover bg-center h-screen md:m-8' style={{ backgroundImage: 'url(../images/about-banner.jpg)' }}>
    <div className='absolute inset-0 flex flex-col justify-center items-center text-white bg-opacity-70'>
      <h2 className='text-5xl font-semibold mb-4 text-center '><Text>19 Years of Illuminating Excellence</Text></h2>
      <div className='text-lg mb-4 text-[#4E403A] text-center'><Text>Lighting the Way with Unmatched Expertise and Innovation since 2004</Text></div>
      <button className='btn-orange text-white mt-10'><Text>Read More</Text></button>
    </div>
  </div>
  
  <div className='mt-20'></div>

  
  <div className="home-icons grid grid-cols-1 md:grid-cols-3 gap-8 ">
  <div className="text-center">
    <div className="icon-background bg-[#47126C] p-4 rounded-full w-20 h-20 text-white mx-auto">
      <i className="fa-solid fa-lightbulb fa-beat text-4xl"></i>
    </div>
    
    
    <h2 className="text-3xl text-[#47126C] mt-4">Electrical Services</h2>
    <p className="text-[#4E403A] mt-4 ">Empowering Possibilities, One Connection at a Time.</p>
    
  </div>

  <div className="text-center">
    
    <div className="icon-background bg-[#47126C] p-4 rounded-full w-20 h-20 text-white mx-auto">
      <i className="fa-solid fa-hourglass-end fa-spin text-4xl"></i>
    </div>
    
    <h2 className="text-3xl text-[#47126C] mt-4 ">40 Hours/week</h2>
    <p className="text-[#4E403A] mt-4 ">Dedicated Commitment Every Hour, Every Day.</p>
    
  </div>

  <div className="text-center">
    <div className="icon-background bg-[#47126C] p-4 rounded-full w-20 h-20 text-white mx-auto">
      <i className="fas fa-charging-station fa-bounce text-4xl"></i>
    </div>
    
    <h2 className="text-3xl text-[#47126C] mt-4">Installation Services</h2>
    <p className="text-[#4E403A] mt-4 ">Seamless Precision, From Concept to Connection.</p>
    
  </div>

</div>


 <div className="feature flex flex-col md:flex-row mt-10 ">
  <div className="our-feature md:w-1/2 text-white bg-[#47126C] p-6 ">
  <Reveal>
    <p className="text-2xl ">Our Features</p>
    <h4 className="text-3xl my-4 ">ELECTRICAL ENGINEERING</h4>
    <p className="text-lg ">
     We offer a broad spectrum of electrical installation works, 
spanning Residential, Commercial, Civic, Industrial, Hospitality, 
Sporting facilities, Mixed-use, and more.We supplying certified electrical fittings, 
cables, fixtures, and accessories, ensuring top-notch quality in all assigned 
projects.
We providing flexible service options, from supply only to comprehensive 
advisory, supply, and install services, tailored to meet client preferences.
 Prioritizing safety in every project, we meticulously address factors such as longevity, life cycle costs, and potential risks, minimizing client concerns.
 Attuned to client feedback, we execute works with precision, addressing concerns such as fire hazards, poorly executed installations, financial outlays, and market conditions.
    </p>
    </Reveal>
  </div>

  <div className="our-work md:w-1/2 text-white bg-[#F43838] p-6  ">
  <Reveal>
    <p className="text-2xl">Our Work</p>
    <h4 className="text-3xl my-4">WE ARE THE BEST IN BUSINESS</h4>
    <p className="text-lg ">
      Expert in both internal and external electrical works, we specialize in a wide array of installations, from low to high voltage. Our rich project portfolio reflects our prowess across diverse sectors, ensuring precision and success. Offering certified materials and a client-centric approach, we prioritize quality, reliability, and tailored solutions for lasting impact.
    </p><br/>
    <p><i className="fa-solid fa-warehouse fa-beat-fade"></i>  Comprhensive Portfolio</p><br/>
    <p><i className="fa-solid fa-boxes-packing fa-beat-fade"></i> Supply Excellence</p><br/>
    <p><i className="fa-solid fa-users fa-beat-fade"></i>  Client-Centric Approach</p>
    </Reveal>
  </div>
</div>

</div>


        

        <div className='contact-us mt-32 '>
            <h2 className='text-5xl font-semibold text-center text-black' >Contact Us</h2>
             <hr className='border-t-2 border-[#F43838] mx-auto my-8' />
        


            
             <div className='form-holder flex flex-row justify-between mb-10'>
             {formSubmitted ? (
           <div className="success-message p-4 bg-green-500 text-white rounded-lg shadow-md text-center my-4 mx-auto md:max-w-md">
           {message}
         </div>
        
        ) : (          
             <form className='md:ml-10 ml-2' onSubmit={handleSubmit}>
  <h5 className='text-2xl font-semibold mb-2 ml-0 text-black'>Get A Free Quote</h5>
  <div className="mb-10 ">
    <input type='text' placeholder='Name' name="name" className='p-2' required onChange={handleChange} />
  </div>
  <div className="mb-10 ">
    <input type='email' placeholder='Email' name="email" className='p-2' required onChange={handleChange} />
  </div>
  <div className="mb-10 ">
    <input type='text' placeholder='Phone Number' name="phone" className='p-2' required onChange={handleChange} />
  </div>
  <div className="mb-10 ">
    <input type='text' placeholder='Message' name="message"  className='p-2 h-20' required  onChange={handleChange} />
  </div>
  <input type='submit' value="SEND" className='btn-orange-rect mb-10' />
</form>
        )}


  <div className='hidden md:block'>
    <img src='../images/contact.jpg' alt='contact' className='h-100  0 w-96 object-cover shadow-md' />
  </div>
</div>

        </div>
  
             <Nav />
            <Brands />
            <Footer />
        </div>
        

    )
}
