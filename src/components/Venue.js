import React from 'react'

import venue from './media/hilton.png'
import phone from './media/phone.png'
import email from './media/email.png'

const Venue = () => {
    return (
        <div className='w-full flex p-8'>
            <div className='flex flex-col '>
                <h1 className='text-6xl text-[#35bc3d] font-bold'>The Venue</h1>
                <h3 className='text-xl text-[#005720] font-light'>Hilton Sao Paulo Morumbi, Sao Paolo, Brasil.</h3>
                <img className='h-48 my-4' src={venue}></img>
                <button className='p-2 px-4 bg-[#35bc3d] text-white font-semibold border-2 border-white hover:bg-transparent hover:text-[#35bd3d] hover:border-[#35bc3d] duration-150'>Get Directions</button>
                <h1 className='text-4xl text-[#005720] font-bold mt-auto'>Get In Touch</h1>
                <div className='flex items-center mt-6'>
                    <img className='h-4 mr-2' src={phone}></img>
                    <h1 className='text-xl font-light color-[#1a1a1a]'>+2347035652264</h1>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 mr-2' src={phone}></img>
                    <h1 className='text-xl font-light color-[#1a1a1a]'>kelvin@africandigitaleconomysummit.com</h1>
                </div>
            </div>
            <div className='flex justify-center items-center ml-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233972.64169892637!2d-46.6964164!3d-23.610697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50cd22bb0037%3A0x7e2bccf5fcedbd95!2sHilton%20Sao%20Paulo%20Morumbi!5e0!3m2!1sen!2sus!4v1721398277937!5m2!1sen!2sus" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Venue
