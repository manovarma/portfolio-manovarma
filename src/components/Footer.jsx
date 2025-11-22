import React from 'react';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import {  AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-slate-900 p-4' style={{ cursor: 'default' }}>
            <div className='flex justify-between flex-wrap gap-4'>
                <p className='text-white text-center w-full sm:w-auto font-light'>
                    © {year} Manovarma Krishnasamy. All rights reserved.
                </p>

                <div className='text-white flex justify-around sm:w-[250px] w-full'>
                    
                    {/* Email */}
                    <a 
                        href="mailto:manovarmaofficial@gmail.com"
                        target = "_blank"
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                    >
                        <FiMail className='text-xl' />
                    </a>
                    <a 
                        href="https://www.hackerrank.com/profile/manovarmaoffici1" 
                        target="_blank"
                        rel="noreferrer"
                        className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
                    >
                        <FaHackerrank className="text-xl" />
                    </a>

                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/manovarma-krishnasamy-182023291/"
                        target='_blank'
                        rel="noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                    >
                        <AiFillLinkedin className='text-xl' />
                    </a>

                    {/* GitHub */}
                    <a 
                        href="https://github.com/manovarma"
                        target='_blank'
                        rel = "noreferrer"
                        className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1'
                    >
                        <FaGithub className='text-xl' />
                    </a>
                
                </div>
            </div>
        </div>
    );
}

export default Footer;
