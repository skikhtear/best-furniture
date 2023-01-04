import React from 'react';

const ProductDetails = () => {
    return (
        <div style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
            <div className='max-w-[1440px] mx-auto p-20 font-bold'>
                <div className='lg:flex'>
                    <img src="https://otobi.com/wp-content/uploads/home-solution-v3.jpg" alt="" className='border-black border-4 shadow-2xl' />

                    <div className='w-2/4 my-auto mx-auto'>
                        <p className='text-3xl lg:text-left sm:text-center'>Home Solutions</p>
                        <p className='lg:text-left sm:text-center'>Luxury, Comfort & Budget. Keeping these three things in mind, Best Furniture is providing you a huge range of Home Furniture Solutions. This Stylish Best Furniture is crafted in Best furniture Flavor according to Bangladeshi household’s choices.</p>
                    </div>
                </div>
                <div className='lg:flex'>
                    <div className='w-2/4 my-auto mx-auto'>
                        <p className='text-3xl lg:text-left sm:text-center'>Office Solutions</p>
                        <p className='lg:text-left sm:text-center'>Modern working methods require modern office solutions using intelligent office furniture. Turning office landscapes into city landscapes. With a wide product range for all zones and areas of the office living space, Best office furniture offers versatile and individual design possibilities. Best furniture combines the highest quality and functionality of office furniture with modern design and innovative technology.</p>
                    </div>

                    <img src="https://otobi.com/wp-content/uploads/office-solution-v3.jpg" alt="" className='border-black border-4 shadow-2xl' />
                </div>

                <div className='lg:flex'>

                    <img src="https://otobi.com/wp-content/uploads/hospital-solution.jpg" alt="" className='border-black border-4 shadow-2xl' />

                    <div className='w-2/4 my-auto mx-auto'>
                        <p className='text-3xl lg:text-left sm:text-center'>Hospital Solutions</p>
                        <p className='lg:text-left sm:text-center'>Best hospital furniture are designed and produced keeping safety, multitude of applications and functions in mind. Elegant looks, innovative designs and utility are highlights of our healthcare furniture. Apart from common furniture directly related to patients and health care providers like hospital beds, ward furniture, hospital cart and stands, bedside tables, hospital cabinet, and baby furniture, Best furniture also offers variety of other furniture used in hospitals like medical office furniture, ward furniture and also furniture for waiting rooms and lobbies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;