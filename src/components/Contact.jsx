import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#827081] flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#e61f93] text-gray-300'>Contact</p>
                <p className='text-gray-300 text-4xl font-bold'> I would love to connect and colaborate on your next project!</p>
            </div>
            <button className='text-white border-2 hover:bg-[#e61f93] hover:border-[#e61f93] px-4 py-3 my-8 mx-auto flex items-center' onClick={()=> window.location = 'mailto:katelynarmstrong6@gmail.com'}>Let's Connect!</button>
        </form>
    </div>
  )
}

export default Contact