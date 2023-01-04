import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaTrash} from "react-icons/fa";
import { AuthContext } from '../../../Context/AuthProvider';
import { Link } from "react-router-dom";





const MyCart= () => {
    const [cartProducts, setCartProducts] = useState();
    const { user, logOut } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://best-furniture-server.vercel.app/mycart?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return
                }
                return res.json();
            })
            .then(data => {
                setCartProducts(data);
            })
    }, [user?.email,logOut])
    console.log(cartProducts);
    // const { img, productName, price, email } = cartProducts;
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            fetch(`https://best-furniture-server.vercel.app/mycart/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('cancel successfully');
                        const remaining = cartProducts.filter(odr => odr._id !== id);
                        setCartProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className=' max-w-[1440px] mx-auto my-24'>
            {
                cartProducts&&
                cartProducts.map(product => <div
                    key={product._id}
                    product={product}
                    className='lg:flex md:flex border my-3'
                >
                    <div>
                        <img src={product.img} alt="" className='w-40 mx-10' />
                    </div>
                    <div className='mt-10 mr-10'>
                        <h1 className='text-2xl font-bold'>{product.productName}</h1>
                        <p className='text-lg font-bold text-red-500'>{product.price} BDT</p>
                        
                    </div>
                    <div className='mt-10 mr-10'>
                        {product.email}
                    </div>
                    <div className='mt-10 ml-10'>
                        {
                            product.price && !product.paid && <Link
                                to={`/payment/${product._id}`}
                            >
                                <button
                                    className='w-20 p- rounded-lg bg-black text-white'
                                >Pay</button>
                            </Link>
                        }
                        {
                            product.price && product.paid && <span className='text-green-500'>Paid</span>
                        }
                        <button onClick={() => handleDelete(cartProducts._id)} className='bg-black text-white px-3 py-1 font-bold text-lg mx-5 rounded-lg'><FaTrash></FaTrash></button>
                       
                    </div>
                </div>)
            }
        </div>

    );
};

export default MyCart;