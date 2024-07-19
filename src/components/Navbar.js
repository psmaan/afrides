import React from 'react'
import logo from './media/logo.png'

const navbar = () => {
    return (
        <div className='bg-[#95d5b2] w-screen h-20 flex justify-between px-8 p-4 items-center navbar absolute'>
            <div className='w-[160px]'>
                <img className='w-full' src={logo}></img>
            </div>
            <div className='flex navbar-links items-end'>
                <h1>Speakers</h1>
                <h1>Schedule</h1>
                <h1>Sponsors</h1>
                <h1>Travel Guide</h1>
            </div>
            <div className='w-[160px]'>
                <button className="text-[#35bc3d] border-2 border-[#35bc3d] p-2 px-4 rounded-lg font-semibold">Sponsor Us</button>
            </div>
        </div >
    )
}

export default navbar
