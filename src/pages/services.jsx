import React from 'react';
import Nav from '../components/nav';
import Brands from '../components/brands';
import Footer from '../components/footer';
import Banner from '../components/banner';
import { Reveal } from '../components/reveal';

export default function Services(){
    return(
        <div className='services'>
        <div className="header-services relative bg-cover bg-center h-screen flex justify-center items-center " style={{ backgroundImage: 'url(../images/service.jpg)' }}>
  <div className="absolute inset-0 bg-[#DFEDDE] opacity-30"></div>

  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black z-100 header">
    <Reveal>
      <h1 className="md:text-6xl text-4xl font-extrabold mb-4 mt-4 text-[#47126C]">OUR <span className='text-[#F43838]'>SERVICES</span> </h1>
      <p className="text-lg mb-9 text-black">Tailored Excellence, Client-Centered Solutions: Illuminating Your Path to Success with Power Engineering Services Company Ltd</p>
      <p>HOME &raquo; <strong>SERVICES</strong></p>
    </Reveal>
  </div>
</div>


                <div className='mt-32'></div>
            <Reveal>
                <div className='service-card1 hidden md:flex justify-between ml-10 mr-10 '>
                <img src='../images/panel.jpg' alt='pole' className='md:w-97 h-96'/>
                <div className ='service-paragraph w-1/2 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5 text-center '>Supply Only, With Manuals</h2>
                    <p className='mb-10 text-justify'>Revolutionize your projects with our 'Supply Only' service at Power Engineering Services Company Ltd. We provide a meticulously curated selection of premium, certified electrical materials. More than just components, our comprehensive manuals accompany each supply, offering detailed insights into installation, operation, and maintenance. This empowers you with the knowledge and control to maximize the potential of your electrical systems, ensuring efficiency, longevity, and peace of mind.</p>
                    <p className='mb-10 text-justify'>We transform your projects with our 'Supply Only' service at Power Engineering Services Company Ltd. By providing premium certified electrical materials alongside detailed manuals, we empower you with control and knowledge. Understand, operate, and maintain your installations seamlessly, ensuring long-term reliability and efficiency	</p>
                </div>
            </div>
            </Reveal>
            <div className='mt-32'></div>

            <Reveal>
            <div className='service-card2 hidden md:flex justify-between ml-10 mr-9'>  
                <div className ='service-paragraph w-1/2 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5 text-center'>Advisory, Supply And Install Services With As-Built Drawings</h2>
                    <p className='mb-10 text-justify'>Elevate your projects with our all-inclusive 'Supply and Install' services at Power Engineering Services Company Ltd. We not only deliver top-tier, certified electrical materials but also ensure their precise installation by our skilled experts. What sets us apart is the provision of 'As-Built Drawings,' offering you a visual roadmap of your system's configuration. This not only enhances transparency during the installation process but also serves as an invaluable reference for future modifications or expansions, guaranteeing adaptability and longevity for your electrical infrastructure.</p>
                    <p className='mb-100 text-justify'>Experience excellence with our 'Supply and Install' services at Power Engineering Services Company Ltd. Beyond providing certified electrical materials, we ensure precision in installation. The inclusion of detailed 'As-Built Drawings' offers transparency and a roadmap for the future, ensuring your project is built to last.</p>
                </div>
                <img src='../images/pole.jpg' alt='panel' className='w-97 h-96'/>
            </div>
            </Reveal>

            <div className='mt-32'></div>
    

            <Reveal>
            <div className='service-card3 hidden md:flex justify-between ml-10 mr-10'>
                <img src='../images/line.jpg' alt='line' className='w-97 h-96'/>
                <div className ='service-paragraph w-1/2 ml-5'>
                    <h2  className='text-3xl font-bold text-[#F43838] mb-5 text-center'>Supply and Install Services, With As-Built Drawings</h2>
                    <p className='mb-10 text-justify'>Embark on a journey of success with our holistic 'Advisory, Supply, and Install' services at Power Engineering Services Company Ltd. Our expert advisory services provide tailored solutions, guiding you through the complexities of electrical projects. Combined with the delivery of premium certified materials and meticulous installations, we go the extra mile by providing detailed 'As-Built Drawings.' This comprehensive approach not only ensures the seamless integration of your project but also equips you with a clear understanding of its structure, fostering adaptability, efficiency, and enduring success.</p>
                    <p className='text-justify'>Redefine success with our holistic 'Advisory, Supply, and Install' services at Power Engineering Services Company Ltd. Beyond quality materials and precise installations, our expert advisory services tailor solutions to your needs. Detailed 'As-Built Drawings' provide a comprehensive overview, ensuring enduring success for your projects.</p>
                </div>
            </div>
            </Reveal>

            <div className='mt-32'></div>

            <Reveal>
            <div className='service-card4 hidden md:flex justify-between ml-10 mr-9'>
                
                <div className ='service-paragraph w-1/2 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5 text-center'>Maintenance Works</h2>
                    <p className='mb-10 text-justify'>Ensure the longevity of your electrical systems with our expert 'Maintenance Works' at Power Engineering Services Company Ltd. With a commitment to safety and reliability, our skilled team offers routine check-ups, repairs, and proactive maintenance. Trust us to keep your operations running smoothly and your systems in optimal condition.</p>
                    <p className='mb-10 text-justify'>Safeguard the heartbeat of your operations with our specialized 'Maintenance Works' at Power Engineering Services Company Ltd. Beyond routine check-ups and timely repairs, our proactive maintenance services are designed to optimize the performance and extend the lifespan of your electrical systems. We mitigate potential risks, minimize downtime, and enhance overall system efficiency. Trust us to be your long-term partner in ensuring the reliability and longevity of your electrical infrastructure, protecting your investments and maintaining operational continuity.</p>
                </div>
                <img src='../images/bulb.jpg' alt='bulb' className='w-97 h-96' />
            </div>
            </Reveal>

            <div className='mt-32'></div>

            {/* small screen */}
            <div className='md:hidden '>
                <img src='../images/panel.jpg' alt='pole' className='w-97 h-96'/>
                <div className ='service-paragraph w-full mt-5 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5'>SERVICE 1</h2>
                    <p className='mb-10 mr-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
                    <p className='mr-10 text-justify'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit animid est laborum.</p>
                </div>
            </div>
            <div className='mt-32'></div>

            <div className=' md:hidden '> 
            <img src='../images/pole.jpg' alt='panel' className='w-97 h-96'/> 
                <div className ='service-paragraph w-full mt-5 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5'>SERVICE 2</h2>
                    <p className='mb-10 mr-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
                    <p className='mr-10 text-justify'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit animid est laborum.</p>
                </div>
                
            </div>
            <div className='mt-32'></div>

            <div className='md:hidden '>
                <img src='../images/line.jpg' alt='line' className='w-97 h-96'/>
                <div className ='service-paragraph w-full mt-5 ml-5'>
                    <h2  className='text-3xl font-bold text-[#F43838] mb-5'>SERVICE 3</h2>
                    <p className='mb-10 mr-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
                    <p className='mr-10 text-justify'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit animid est laborum.</p>
                </div>
            </div>
            <div className='mt-32'></div>

            <div className='md:hidden'>
              <img src='../images/bulb.jpg' alt='bulb' className='w-97 h-96' />
                <div className ='service-paragraph w-full mt-5 ml-5'>
                    <h2 className='text-3xl font-bold text-[#F43838] mb-5'>SERVICE 4</h2>
                    <p className='mb-10 mr-10 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua.</p>
                    <p className='mr-10 text-justify'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit animid est laborum.</p>
                </div>
                
            </div>

            <div className='mt-32'></div>



            <Nav />
            <Banner />
            <Brands/>
            <Footer/>

        </div>
    )
}