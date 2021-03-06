import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#827081]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#c6d2ed]'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Katelyn Armstrong
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#ccd6f6] font-bold py6 max-w-[700px]'>
          I am a full-stack developer with a team leadership and management background. I strive to build beautiful and responsive web applications with a postive user experience. 
          
        </p>
        <div>
        <Link to="work" smooth={true} duration={500}>
        <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e61f93] hover:border-[#e61f93]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
