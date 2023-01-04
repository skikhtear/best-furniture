import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';


const Product = () => {
    const product = useLoaderData()
    console.log(product);
    const { img, name, price, _id } = product;

    const { user } = useContext(AuthContext);

    const handleCart = event => {
        event.preventDefault();
        const myCart = {

            productName: name,
            price: price,
            email: user.email, 
            img: img
        }


        fetch('https://best-furniture-server.vercel.app/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Go to mycart and check')
                }
                else {
                    toast.error(data.message)
                }
            })

    }
    return (
        <div className='lg:flex md:flex mt-10'>
            <div className='lg:ml-10 sm:mx-5 p-10 rounded-xl' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
                <ul className='space-y-5'>
                    <li><Link to={'/homefurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Home Furniture</button></Link></li>
                    <li><Link to={'/officefurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Office Furniture</button></Link></li>
                    <li><Link to={'/hospitalfurniture'}><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>Hospital Furniture</button></Link></li>

                </ul>
            </div>
            <div className='lg:flex md:flex ' key={_id}>
                <div>
                    <img src={img} alt="" className='border-xl'/>
                </div>
                <div className='py-28 lg:ml-24'>
                    <h1 className='text-4xl my-10'>Best Furniture</h1>
                    <p className='text-2xl'>{name}</p>
                    <p className='text-2xl'>{price}BDT</p>
                    <Link ><button className='bg-black text-white px-3 py-2 font-bold text-lg mt-5 rounded-lg mr-5'>Buy Now</button></Link>
                    <Link><button onClick={handleCart} className='bg-black text-white px-3 py-2 font-bold text-lg mt-5 rounded-lg'>Add To Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;