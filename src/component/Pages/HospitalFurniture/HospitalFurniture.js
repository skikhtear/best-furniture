import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProductsCard from '../AllProducts/AllProductsCard';




const HospitalFurniture = () => {
    const [allProducts, setAllProducts] = useState();

    useEffect(() => {
        fetch('https://best-furniture-server.vercel.app/hospitalfurniture')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log(allProducts);

    return (
        <div className='lg:flex md:flex mt-20'>
            <div className='lg:ml-10 sm:mx-5 p-10 rounded-xl' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
                <ul className='space-y-5'>
                    <li><Link to={'/homefurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Home Furniture</button></Link></li>
                    <li><Link to={'/officefurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Office Furniture</button></Link></li>
                    <li><Link to={'/hospitalfurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Hospital Furniture</button></Link></li>

                </ul>
            </div>
            <div className='grid gap-10 gap-x-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 sm:mx-auto'>
                {allProducts &&
                    allProducts.map(products => <AllProductsCard
                        key={products._id}
                        products={products}
                    ></AllProductsCard>)
                }
            </div>
        </div>

    );
};

export default HospitalFurniture;
