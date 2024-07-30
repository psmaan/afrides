import React, { useState } from 'react';
import logo from './media/logo.png';
import g20 from './media/g20.png';
import t20 from './media/t20.png';
import menuIcon from './media/menu.png'; // Placeholder for menu icon
import closeIcon from './media/close.png'; // Placeholder for close icon

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='p-4 py-8 bg-[#95d5b2] w-screen h-24 flex justify-between lg:pr-8 sm:pr-8 md:p-2 items-center navbar top-0 z-20 pl-0'>
            <div className='w-[400px] h-[55px] sm:h-[100px] md:h-[60%] lg:h-[70%] xl:h-full flex flex-row md:flex-row items-center'>
                <img className='h-full mb-6 mr-2' src={g20} alt="Logo" />
                <img className='h-[50%] mt-2s mr-2' src={t20} alt="Logo" />
                <img className='h-[40%]' src={logo} alt="Logo" />
            </div>
            <div className='hidden md:flex navbar-links items-end lg:space-x-6'>
                <h1>Speakers</h1>
                <h1>Schedule</h1>
                <h1>Sponsors</h1>
                <h1 className='text-nowrap'>Apply for Visa</h1>
            </div>
            <div className='hidden w-[300px] md:flex justify-end'>
                <button className="text-[#35bc3d] border-2 border-[#35bc3d] p-2 px-4 rounded-lg font-semibold hover:scale-110 duration-150 ml-auto">Sponsor Us</button>
            </div>
            <div className='md:hidden' onClick={toggleMenu}>
                <img className='w-8 h-8' src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
            </div>
            {menuOpen && (
                <div className='md:hidden absolute top-20 left-0 w-full h-screen bg-[#95d5b2] flex flex-col items-center space-y-4 p-4 navmenu'>
                    <h1>Speakers</h1>
                    <h1>Schedule</h1>
                    <h1>Sponsors</h1>
                    <h1>Apply for Visa</h1>
                    <button className="text-[#35bc3d] border-2 border-[#35bc3d] p-4 px-8 rounded-lg font-semibold text-2xl">Sponsor Us</button>
                    <button className='m-4 font-semibold rounded-lg p-4 px-8 bg-[#35bc3d] text-white text-2xl'>Buy Tickets</button>
                </div>
            )}
        </div>
    );
};

export default Navbar;