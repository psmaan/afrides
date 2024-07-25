import React from 'react'

import venue from './media/hilton.png'
import phone from './media/phone.png'
import email from './media/email.png'

import bluestar2 from './media/btpaulista.jpeg'


const Venue = () => {
    return (
        <div className='w-full flex p-8'>
            <div className='flex flex-col md:w-80 lg:w-[400px]'>
                <h1 className='text-4xl md:text-2xl lg:text-4xl xl:text-6xl text-[#35bc3d] font-bold'>The Venue</h1>
                <h3 className='sm:text-xl md:text-lg lg:text-xl text-[#005720] font-light'>Blue Tree Premium Paulista, São pãulo</h3>
                <img className='w-80 md:h-48 my-4' src={bluestar2}></img>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d233972.64169892637!2d-46.6964164!3d-23.610697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50cd22bb0037%3A0x7e2bccf5fcedbd95!2sHilton%20Sao%20pãulo%20Morumbi!5e0!3m2!1sen!2sus!4v1721398277937!5m2!1sen!2sus" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='md:w-[360px] md:h-[320px] md:hidden m-auto my-4'></iframe>
                <h1 className='text-4xl text-[#005720] font-bold mt-auto'>Get In Touch</h1>
                <div className='flex items-center mt-6'>
                    <img className='h-4 mr-2' src={phone}></img>
                    <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+2347035652264</h1>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 mr-2' src={phone}></img>
                    <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'>+1(202)500-332</h1>
                </div>
                <div className='flex items-center'>
                    <img className='h-4 mr-2' src={email}></img>
                    <h1 className='md:text-lg lg:text-xl font-light color-[#1a1a1a]'> afrides@hubfordigitalexcellence.com</h1>
                </div>
            </div>
            <div id='maps' className='flex justify-center items-center md:ml-8 lg:ml-20 w-1/2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2308026354303!2d-46.65868242466992!3d-23.560152778800653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cc06495c71%3A0xcc0f48b9437fc214!2sBlue%20Tree%20Premium%20Paulista!5e0!3m2!1sen!2sin!4v1721911258981!5m2!1sen!2sin" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='hidden md:block md:w-[360px] md:h-[320px]'></iframe>
            </div>

        </div>
    )
}

export default Venue
