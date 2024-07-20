const Landing = () => {
    return (
        <div className='w-screen h-screen sm:min-h-[700px] md:bg-[#95d5b2] flex flex-col items-center landing pt-24 sm:pt-32 sm:pt-16  md:pt-12 lg:pt-16 saopaulo z-10'>
            <h2 className='text-[#95d5b2] font-semibold my-6'>22-25th October 2024</h2>
            <h1 className='font-bold text-6xl sm:text-7xl md:text-8xl text-center w-[90%] text-[#35bc3d] '>Africa <span className='text-white'>Digital Economy Summit</span></h1>
            <h2 className='text-center mt-8 text-2xl md:text-4xl text-[#95d5b2] font-bold'>Sao Paulo Edition</h2>
            <h3 className='mt-4 text-center px-4 text-white'>Digital Transformation for Sustainable Growth: Africa’s Path to a Connected Future</h3>
            <div className='flex items-center hero-buttons mt-2 flex-row'>
                <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white'>Brochure</button>
                <button className='m-4 font-semibold rounded-lg p-2 px-4 bg-[#35bc3d] text-white'>Buy Tickets</button>
            </div>
        </div>
    );
};

export default Landing;