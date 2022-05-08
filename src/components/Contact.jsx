import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#827081] flex justify-center items-center p-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'> I would love to connect and colaborate on your next project! </p>
            </div>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' onClick={()=> window.location = 'mailto:katelynarmstrong6@gmail.com'}>Let's Connect!</button>
    </div>
  )
}

export default Contact