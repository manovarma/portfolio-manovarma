import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt='service_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>
              Introduction
            </h2>

            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              Hey, I'm <span className='text-green-300 font-semibold'>Manovarma Krishnasamy</span> 👋  
              <br />I decode data → insights → decisions → value.
              <br /><br />
              I work at the intersection of machine learning, analytics, and cloud systems,
              turning messy datasets into models, dashboards, and meaningful business impact.
              <br /><br />
              From building ML-based sales prediction systems at Afame Technologies to gaining
              DevOps experience at CGI, I’ve worked across data workflows that involve automation,
              scalability, and performance. I also contributed to analytical tasks at Prodigy InfoTech
              and handled structured databases during my role at SVS Agri Foods.
              <br /><br />
              I’m currently pursuing my Master’s in Data Science at Hochschule Fulda, where I continue 
              strengthening my skills in predictive analytics, visualization, and end-to-end data 
              solution development.
            </p>

            <ButtonLink
              url='https://www.linkedin.com/in/manovarma-krishnasamy-182023291'
              text='View Resume →'
              padding={`p-3`}
            />
          </div>

          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
