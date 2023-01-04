import React from 'react';
import { Link } from 'react-router-dom';



const About = () => {
    return (
        <div className='py-20 text-black my-5 bg-gradient-to-r from-cyan-500 to-blue-500' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
            <div className='max-w-[1440px] mx-auto font-bold'>
                <h1 className='text-5xl text-center py-5'>About Best Furniture</h1>
                <p className='text-2xl text-center pb-5'>The most preferred lifestyle solution brand in Bangladesh.</p>
                <p>
                    Best Furniture, the leading furniture manufacturer and retailer in Bangladesh is the most preferred lifestyle solution brand because of its constant innovations, advanced technological expertise, manufacturing capacity in the widest range of furniture categories, largest distribution network and time-tested service reputation
                </p>
                <Link><button className='bg-black text-white p-5 font-bold text-lg mt-5 rounded-lg'>Read More</button></Link>
            </div>
        </div>
    );
};

export default About;