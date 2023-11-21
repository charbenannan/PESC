import React from 'react';
import{animateScroll as scroll} from 'react-scroll';
import Brands from '../components/brands';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import { Reveal } from '../components/reveal';
import { Text } from '../components/text';

export default function About(){
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
    return(
        <div className='About'>
          <div className="header-about relative bg-[#DFEDDE] bg-cover bg-center text-black py-20">
  <div className="md:flex items-center">
    <img
      src="../images/about.png"
      alt="background"
    />
    <div className="w-full md:w-1/2 relative z-10 mt-10 md:mt-0 flex flex-col justify-center items-center text-center">
  <div className="pl-5 pr-10 mb-5 md:pl-20">
    <Reveal>
    <h1 className="md:text-6xl text-4xl font-bold mb-4 mt-2 text-[#47126C]">
      ABOUT <span className="text-[#F43838]">US</span>
    </h1>
    <p className="text-lg mb-8 text-black">
    Empowering Excellence, Illuminating Innovation: Discover the Essence of Power at Power Engineering Services Company Ltd.
    </p>
    <p>HOME &raquo; <strong>About Us</strong></p>
    </Reveal>
  </div>
</div>

  </div>
          
  <div className='about-cards md:flex ml-12 mr-12'>

  <Reveal><div className='about-card1 bg-[#F43838] text-white flex flex-col justify-center items-center'>  
    <div className="icon-background text-center bg-white p-4 rounded-full w-20 h-20 text-[#47126C] flex items-center justify-center mt-5">
      <i className="fa-solid fa-bolt-lightning fa-beat-fade text-4xl h-full"></i>
    </div>
    <h2 className='text-2xl mt-4 text-center'>VOLTAGE WORKS</h2>
    <p className='text-center mb-4  w-1/2'>Precision and innovation define our expertise in internal and external works.</p>
   
   
      <button  onClick={() => scrollToSection('voltage')} className='btn-white bg-white text-black shadow-md w-32 h-16 mb-4 hover:bg-gray-100 hover:text-gray-800'>
        MORE
      </button>
   
  </div>
  </Reveal>



  <Reveal>
  <div className='about-card2 bg-[#47126C] text-white flex flex-col justify-center items-center'>
    <div className="icon-background bg-white p-4 rounded-full w-20 h-20 text-[#F43838] flex items-center justify-center mt-5">
    <i className="fas fa-charging-station fa-bounce text-4xl h-full"></i>

    </div>
    <h2 className='text-2xl mt-4 text-center'>ELECTRICAL INSTALLATIONS</h2>
    <p className='text-center mb-4 w-1/2'>Seamless fusion of precision, innovation in conduits, transformers, generators</p>
    
    <button onClick={() => scrollToSection('electrical')} className='btn-white bg-white text-black shadow-md w-32 h-16 mb-4 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-800'>
  MORE
</button>


  </div>
  </Reveal>

<Reveal>
  <div className='about-card3 bg-[#F43838] text-white flex flex-col justify-center items-center'>
    <div className="icon-background bg-white p-4 rounded-full w-20 h-20 text-[#47126C] flex items-center justify-center mt-5">
    <i className="fa-solid fa-fan fa-flip text-4xl h-full"></i>
    </div>
    <h2 className='text-2xl mt-4 text-center'>MAINTENANCE</h2>
    <p className='text-center mb-4 w-1/2'>Routine checks, preventive measures, and detailed maintenance for optimal performance.</p>
    
    <button  onClick={() => scrollToSection('maintenance')} className='btn-white bg-white text-black shadow-md w-32 h-16 mb-4 hover:cursor-pointer hover:bg-gray-100 hover:text-gray-800'>
  MORE
</button>

  </div>
  </Reveal>
</div>



            </div>

            <div className='mt-32'></div>
            <div className='body-about ml-10 mr-10 text-justify text-black'>
            <div className='mb-5'><Text>Power Engineering Services Company Ltd (PESC) is an Electrical Contractor and Supplying firm based in
Accra, Ghana.
Formed in 2004, its objective is to satisfy the urgent need of customers by providing professional,
quality and custom-made services in the competitive field of electrical engineering. Starting from the
capital Accra, with its Head Office located on the main Kasoa road, adjacent Benjy’s Lodge Guest House
at McCarthy Hill and eventually extending its services across Ghana and the West Africa sub region in
the future.
It supports its core business with a team of well trained and highly motivated technical personnel and
high quality internationally branded electrical inputs, on which no compromises are made.
Over the past 15 years, the Company has grown and emerged into an organized, competent, reliable
and efficient electrical service provider, with a fine track record and a valuable list of new and repeat
Clientele.
The company is currently located adjacent Benjy’s Lodge Guest House at McCarthy Hill, Accra, with a
medium-term plan to develop new warehousing facilities and a show room in the next 3 years.</Text></div>
            <div className='mb-10'><Text>At Power Engineering Services Company Ltd, we are more than an electrical solutions provider – we are architects of innovation and champions of excellence. Established with a vision to redefine the standards of electrical engineering, we have evolved into a dynamic force in the industry. Our journey is marked by decades of collective expertise, where skilled electricians, visionary directors, and administrative professionals converge to illuminate the path to excellence.

Our electricians form the backbone of our operations, infusing precision into every low and high voltage project. Their wealth of experience ensures the reliability and success of every endeavor. Guided by visionary directors, our strategic approach extends from business development to financial efficiency, propelling us to new heights.

Administratively, we foster a harmonious work environment, where versatility and commitment are the pillars of our success. Our commitment to excellence, innovation, and unwavering dedication defines us. As architects of power, we navigate the complexities of electrical projects with proficiency and innovation, lighting the way to a brighter future. Welcome to Power Engineering Services Company Ltd, where brilliance meets power.</Text></div>

            <div className='mb-5'><Text>The Company excels in a diverse spectrum of Electrical installation works, encompassing Residential, Commercial, Civic, Industrial, Hospitality, Sporting facilities, Mixed-use, and more, as showcased in our comprehensive project portfolio. Our expertise spans Internal and External electrical works, covering conduit, cable, accessories installations, dedicated transformers, generators, invertors, networking, data, telephone, fire alarm, and security systems installations, including burglar alarms and CCTV.</Text></div>
            <div className='mb-10'>
  <Text>
    The Company provides a diverse range of certified and high-quality electrical fittings, cables, fixtures, and accessories tailored for installations in all assigned projects, offering clients versatile OPTIONS, with options 2 and 3 recommended for optimal results: 1. Supply only, with manuals; 2. Supply and install services, with as-built drawings; 3. Advisory, supply and install services, with as-built drawings; 4. Maintenance works. Our commitment to excellence is underscored by our acute sensitivity to crucial factors identified through periodic customer surveys, encompassing the longevity of electrical installations, life cycle costs, safety concerns such as potential fire outbreaks, risks associated with poorly executed works, client financial considerations, and market/economic conditions.
  </Text>
</div>

            <div id='voltage'>
            <Reveal>
            <h2 className='text-center text-3xl font-bold mt-10 text-black' >VOLTAGE WORKS</h2>
            <hr className='border-t-2 border-[#F43838] mx-auto my-8' />
            <p className='mb-5'>Power Engineering Services Company Limited stands at the forefront of the electrical engineering landscape, delivering a wide array of services tailored to meet the dynamic demands of our clients. With a keen focus on precision and innovation, our expertise encompasses Internal (Low Voltage) and External (High Voltage) works, ensuring a seamless blend of proficiency and safety across all projects.

As a stalwart in the industry, we take pride in our diverse portfolio that spans Residential, Commercial, Civic, Industrial, Hospitality, Sporting facilities, Mixed-use, and more. Our commitment to excellence is not only evident in the quality of our electrical conduit, cable, and accessories installations but also extends to dedicated transformer setups, generator installations, inventor configurations, and networking and data solutions.

At Power Engineering Services Company Limited, we go beyond conventional electrical services. We are a one-stop solution, offering a range of certified and quality electrical fittings, cables, fixtures, and accessories for installations. Clients have the flexibility to choose from a suite of options, with a strong recommendation for the superior outcomes achievable through our Supply and Install Services, coupled with detailed as-built drawings.

</p>
            <p className='mb-10'>What sets us apart is our unwavering dedication to client satisfaction. Through extensive customer surveys, we've honed our sensitivity to factors crucial to our clientele. From ensuring the longevity and life span of electrical installations to mitigating risks associated with poorly executed works, we prioritize safety, financial considerations, and market/economic conditions.

Power Engineering Services Company Limited is not just a service provider; we are your strategic partner in illuminating the path to electrical excellence. With a legacy of proficiency and a forward-looking approach, we continue to power the future with innovation and precision.</p>
            </Reveal>
            </div>

            <div id='electrical'>
            <Reveal>
            <h2 className='text-center text-3xl font-bold mt-10 text-black' >ELECTRICAL INSTALLATIONS</h2>
            <hr className='border-t-2 border-[#F43838] mx-auto my-8' />
            <p className='mb-5'>Electrical installations are the heartbeat of Power Engineering Services Company Limited, where our commitment to excellence meets the dynamic demands of modern electrical engineering. Our expertise in electrical installations spans a wide spectrum, including both Internal (Low Voltage) and External (High Voltage) works. From the meticulous placement of conduits, cables, and accessories to the strategic installation of dedicated transformers, generators, invertors, and networking and data solutions, we ensure a seamless fusion of precision and innovation.

At Power Engineering Services Company Limited, we cater to diverse sectors, encompassing Residential, Commercial, Civic, Industrial, Hospitality, Sporting facilities, Mixed-use, and more. Our portfolio reflects not just our proficiency in the technical aspects of electrical installations, but also our unwavering commitment to delivering quality and reliability in every project.
 
</p>
<p className='mb-5'>Clients choosing Power Engineering Services Company Limited benefit from a comprehensive suite of certified and high-quality electrical fittings, cables, fixtures, and accessories. Our commitment to client satisfaction is evident in our flexible service options, ranging from Supply only with manuals to Supply and Install services, complete with detailed as-built drawings. We understand the unique needs of each client and recommend options tailored to ensure optimal results.

Beyond technical expertise, our approach is grounded in a deep understanding of client concerns. Through regular customer surveys, we address critical factors such as the longevity and life span of electrical installations, potential risks, financial considerations, and market/economic conditions. At Power Engineering Services Company Limited, we don't just execute electrical installations; we power the future with a commitment to safety, innovation, and client-centric solutions.</p>
            </Reveal>
            </div>

        <div id='maintenance'>
            <Reveal>
            <h2 className='text-center text-3xl font-bold mt-10 text-black '>MAINTENANCE</h2>
            <hr className='border-t-2 border-[#F43838] mx-auto my-8' />
            <p className='mb-5'>Maintenance at Power Engineering Services Company Limited is a cornerstone of our commitment to ensuring the longevity and optimal performance of electrical installations. Our dedicated maintenance services cover a spectrum of activities designed to mitigate potential risks, enhance safety, and preserve the integrity of electrical systems. From routine checks and preventive measures to addressing specific concerns, our maintenance works are conducted with meticulous attention to detail.

Clients entrusting their electrical systems to Power Engineering Services Company Limited benefit from a proactive and client-centric approach to maintenance. Our services go beyond reactive responses to issues; we prioritize preventive measures to identify and address potential problems before they escalate. This approach not only minimizes downtime but also contributes to the overall safety and efficiency of electrical installations.

</p>
            <p className='mb-10'>With a focus on client convenience and operational continuity, our maintenance works are tailored to meet the unique needs of diverse sectors, including Residential, Commercial, Civic, Industrial, Hospitality, Sporting facilities, Mixed-use, and more. Our team of skilled professionals is equipped to handle a range of maintenance tasks, ensuring that electrical systems remain in peak condition throughout their life cycle.

At Power Engineering Services Company Limited, we understand that the reliability of electrical systems is paramount. Through our comprehensive maintenance services, we empower clients with the assurance that their electrical infrastructure is not only installed with precision but is also diligently cared for to meet the highest standards of safety and performance.</p>
            </Reveal>
            </div>
            
            </div>
            <div className='mb-10 '></div>
            <Nav />
            <Banner />
            <Brands />
            <Footer />
        </div>
    )
}