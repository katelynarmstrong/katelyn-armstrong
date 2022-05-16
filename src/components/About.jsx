import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#827081] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#e61f93]'>
              About
            </p>
          </div>
          <div></div>
          </div>
         
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-10 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Katelyn Armstrong and it is a pleasure to meet you!</p>
            </div>
            <div>
              <p>I am a full stack web developer with a team leadership and management background. My professional career started in customer services and moving into customer service management both in retail and an office environments. These experiences helped me gain a strong understanding in aesthetics, what a client needs for a positive experience, and how to manage a team to deliver a positive client experience. I have learned how to hone those in person skills and apply them to the online world to deliver a beautiful, efficient web design to create a positive user experience.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
