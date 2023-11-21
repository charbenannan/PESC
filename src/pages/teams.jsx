import React from 'react';
import Nav from '../components/nav';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Brands from '../components/brands';
import { Reveal } from '../components/reveal';

export default function Team(){
    return(
        <div className='Team'>
        <div className="header-teams relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(../images/team.jpg)' }}>
        <div className="absolute inset-0 bg-[#DFEDDE] opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black z-100 header">
            <Reveal>           
            <h1 className="md:text-6xl text-4xl font-extrabold mb-4 mt-20 text-[#47126C]">OUR <span className='text-[#F43838]'>TEAM</span></h1>
            <p className="text-lg mb-8 text-black">Meet the Power Behind Power: Dedicated, Expert, and Client-Focused – Unveiling the Force that Drives Power Engineering Services Company Ltd</p>
            <p>HOME &raquo; <strong>TEAM</strong></p>
            </Reveal>

            </div>
            </div>

            <div className='mt-32'></div>

            <div className='body-teams ml-10 mr-10 text-justify'>
            <p className='mb-5'>Embark on a journey with our team at Power Engineering Services Company Ltd, where expertise meets innovation and dedication illuminates every project. From seasoned electricians to visionary directors, our diverse team brings a wealth of experience and passion to the forefront.</p>
            <p className='mb-10'>Our team at Power Engineering Services Company Ltd is more than a collection of individuals; it's a symphony of diverse talents, united by a common goal – excellence in every electrical solution. From skilled electricians and visionary directors to administrative professionals, each member brings a unique set of skills and experiences, creating a dynamic force that propels us forward. The backbone of our operations, our electricians infuse precision into every low and high voltage work, ensuring reliability at every turn. Our visionary directors contribute strategic insights, driving business development and financial efficiency. The administrative team, with their versatility and commitment, forms the foundation for a harmonious work environment. Together, we embody the essence of Power Engineering Services Company Ltd, a team dedicated to navigating the complexities of electrical projects with innovation, proficiency, and unwavering dedication.</p>
             <br />   
            <p className='mb-5 font-bold'><strong>Jacob Kobla Avor - Chief Executive Officer</strong></p>
            <p className='mb-10'>
With over three decades of experience as our CEO, who also has a background as an Electrician & Operations Specialist, Jacob stands as the backbone of our operations. His journey from the National Vocational Tech. Institute to roles in international companies showcases his proficiency in both low and high voltage works. Precision and reliability define Jacob's approach to electrical installations, making him an indispensable part of our team.</p>      
           <p className='mb-5 font-bold'>Kojo Sackey - Finance Director</p>
           <p className='mb-10'>
           Meet Kojo, our financial maestro. With a rich history at Goldkey Properties Ltd and Denton Property Managers Ltd, Kojo's financial acumen ensures the fiscal efficiency of Power Engineering Services Company Ltd. As Co-Founder and Chairman of the Board at De-Kkej Company Ltd, he brings strategic insights that drive our business development, software/hardware, and event planning.
           </p>
           
           <p className='mb-5 font-bold'><strong>Ababio Gyasi - Director - Technical Engineer</strong></p>
           <p className='mb-10'>Ababio, our Technical Engineer, is the driving force behind our technical prowess. With extensive experience in communications and management, he excels in fault intervention, rural electrification, and project mapping at the Electricity Company of Ghana Limited. Ababio's commitment to training and mentoring reflects our dedication to excellence.</p>

           
           <p className='mb-5 font-bold'><strong>Bernard Kwabena Ameyaw - Director - Information Technology Engineer</strong></p>
           <p className='mb-10'>Bernard, our IT virtuoso, brings a dynamic edge to our team. His expertise in computer repair, networking, software installation, and information security is unmatched. Bernard's proactive approach ensures our technological infrastructure remains robust and innovative.</p>

           
           <p className='mb-5 font-bold'><strong>Isaac Armah - Technical Supervisor</strong></p>
           <p className='mb-10'>Isaac, our Technical Supervisor, leads the charge with hands-on experience and a commitment to excellence. From his formative years at Accra Technical Training Centre to roles in companies like Taysec Construction and Samills Construction Company, Isaac ensures the seamless execution of electrical projects with skill and leadership.</p>

           
           <p className='mb-5 font-bold'><strong>Evelyn Esi Sarfoa Acquah - Executive Administrator</strong></p>
           <p className='mb-10'>Evelyn, our Administrative Executive, is the heartbeat of our organization. With a career dedicated to effective communication and organizational growth, she seamlessly manages human resource functions, funds collection, and office administration. Evelyn's versatility and commitment make her an invaluable asset to our success. </p>

           
           <p className='mb-5'>Together, our team embodies the spirit of Power Engineering Services Company Ltd—dedicated, innovative, and committed to lighting the way to excellence in every electrical endeavor.</p>
           <p className='mb-10'></p>

           
           <p className='mb-5'></p>
           <p className='mb-10'></p>
           
            </div>



            
            
            <div className='our-team  py-10'>
 

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

            <Nav />
            <Banner />
            <Brands />
            <Footer /> 
        </div>
    )
}