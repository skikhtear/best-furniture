import React from 'react';
import PaymentsIcon from '@mui/icons-material/Payments';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportIcon from '@mui/icons-material/Support';
import ChairIcon from '@mui/icons-material/Chair';
import BuildIcon from '@mui/icons-material/Build';
import HandymanIcon from '@mui/icons-material/Handyman';



const Services = () => {
    return (
        <div className='mt-10' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
            <div className="max-w-[1440px] mx-auto font-bold p-10">
                <div>
                    <h1 className="text-5xl font-bold text-center mb-3">Why Best Furniture</h1>
                    <p>Providing you with the highest-quality products and services</p>
                </div>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 sm:mx-auto'>
                    <div>
                        <div><PaymentsIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Easy Payment</p>
                        <p>Easy cash and card payment facility. Enjoy 0% interest for installment payment.
                            * Conditions Apply</p>

                    </div>
                    <div>
                        <div><LocalShippingIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Home Delivery</p>
                        <p>We provide home delivery service all over Bangladesh</p>

                    </div>
                    <div>
                        <div><SupportIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Warranty Policy</p>
                        <p>1 Year warranty for all furniture
                            (unless otherwise stated).
                            * Conditions Apply</p>

                    </div>
                    <div>
                        <div><ChairIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Knockdown Furniture</p>
                        <p>You can easily dismantle your furniture, give multiple shape by using the separate components are packed in cartons.</p>

                    </div>
                    <div>
                        <div><BuildIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Assembling</p>
                        <p>Our expert team is always ready to assemble your furniture for free!</p>

                    </div>
                    <div>
                        <div><HandymanIcon sx={{ width: '100px', height: '100px' }} /></div>
                        <p className='text-xl text-center'>Repair</p>
                        <p>Free of cost repair for In-warranty products. However, if the warranty period has been expired the product can be repaired and charges will be applicable.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;