import React, { useEffect } from 'react';
import hero1 from './media/summithero1.jpeg';
import hero2 from './media/summithero2.png';

const Icons = () => {
    useEffect(() => {
        const hero1Element = document.querySelector('.hero1');
        const hero2Element = document.querySelector('.hero2');

        // Trigger reflow to restart the animation
        hero1Element.classList.remove('animate');
        hero2Element.classList.remove('animate');

        // Add animation class after a small delay
        setTimeout(() => {
            hero1Element.classList.add('animate');
            hero2Element.classList.add('animate');
        }, 100);
    }, []);

    return (
        <div className='w-screen h-screen grid grid-cols-2 grid-rows-2 absolute'>
            <div className='absolute top-16 left-12 m-4 p-4 bg-white rounded-full h-[300px] w-[300px] flex justify-center items-center hero1'></div>
            <div className='absolute top-20 right-20 m-4 p-4 text-white rounded-full h-[200px] w-[200px] flex justify-center items-center text-center text-xl font-bold bg-[#35bc3d]'>The Africa Digital Economy Awards 2024</div>
            <div className='absolute bottom-0 right-20 m-4 p-4 bg-white rounded-full h-[300px] w-[300px] flex justify-center items-center hero2'></div>
            <div className='absolute bottom-16 left-40 m-4 p-4 text-white rounded-full h-[200px] w-[200px] flex justify-center items-center text-center text-2xl bg-[#35bc3d] font-bold h'>African Business Dinner Night</div>
        </div>
    );
}

export default Icons;
