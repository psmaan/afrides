import React from 'react'

const Landing = () => {
    return (
        <div className='w-screen h-screen bg-[#95d5b2] flex flex-col items-center landing pt-36'>
            <h2 className='text-[#005720] font-semibold mb-4'>22-25th October 2024</h2>
            <h1 className='font-bold text-9xl text-center w-[90%] text-[#35bc3d]'>Africa <span className='text-[white]'>Digital Economy Summit</span></h1>
            <h2 className='text-center mt-8 text-4xl text-[#005720]'>Sao Paulo Edition</h2>
            <h3 className='mt-4'>Digital Transformation for Sustainable Growth: Africa’s Path to a Connected Future</h3>
            <div className='flex items-center hero-buttons mt-2'>
                <button className='m-4 font-semibold rounded-lg p-2 px-4'>Brochure</button>
                <button className='m-4 font-semibold rounded-lg p-2 px-4'>Buy Tickets</button>
            </div>
        </div>
    )
}

export default Landing
