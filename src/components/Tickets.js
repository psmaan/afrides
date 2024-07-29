import React, { useRef } from 'react'
import ticket from './media/ticket.png'
import tick from './media/tick.png'

const Tickets = () => {

    return (
        <div className='w-full bg-[#95d5b2] flex flex-col items-center py-12'>
            <h1 className='text-[#35bc3d] font-bold text-6xl'>Buy Tickets</h1>
            <div className='h-2 w-40 bg-[#35bc3d] rounded-full my-4'></div>
            <div className='flex flex-col md:flex-row items-center mt-8'>
                <div className='bg-white/20 h-[580px] lg:h-[650px] w-[360px] lg:w-[480px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-200 my-4'>
                    <h1 className='text-white font-bold text-4xl'>Standard</h1>
                    <img className='w-[90px] my-2' src={ticket}></img>
                    <h1 className='text-4xl text-[#005720] font-bold'>$500</h1>
                    <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150'>Buy Now</button>
                    <div className='flex flex-col items-start w-[95%]'>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>⁠Access to all keynote sessions and panel discussions.
                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>⁠Entry to the networking zone and exhibition hall.
                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>Swag bag with event materials and sponsor information.
                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg'>Coffee breaks and light refreshments.
                            </h1>
                        </div>
                        <div className='flex items-center pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>⁠Invitation to the Africa Business dinner with industry leaders.
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='bg-white/20 h-[580px] lg:h-[650px] w-[360px] lg:w-[480px] backdrop-blur-3xl rounded-3xl flex flex-col items-center p-4 py-8 mx-2 lg:mx-4 border-2 border-white/20 hover:scale-105 duration-300 my-4'>
                    <h1 className='text-white font-bold text-4xl'>Premium</h1>
                    <img className='w-[90px] my-2' src={ticket}></img>
                    <h1 className='text-4xl text-[#005720] font-bold'>$750</h1>
                    <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white hover:scale-110 duration-150'>Buy Now</button>
                    <div className='flex flex-col items-start w-[95%]'>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg  w-[90%]'>⁠All benefits of the Standard Ticket.

                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>Access to exclusive workshops and hands-on sessions.

                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'> ⁠VIP seating for keynote sessions.

                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'> ⁠Tourism package with guided tours to major attractions.
                            </h1>
                        </div>
                        <div className='flex items-center border-b-[1px] pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'> ⁠Premium goodie bag with high-value items and exclusive event memorabilia
                            </h1>
                        </div>
                        <div className='flex items-center pb-1 w-full my-1'>
                            <div className='w-5 h-5 bg-[#35bc3d] rounded-full mr-3 flex justify-center items-center'>
                                <img src={tick} className='h-[70%]'></img>
                            </div>
                            <h1 className='text-white font-light text-sm lg:text-lg w-[90%]'>⁠Entry to the VIP networking lounge.

                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tickets
