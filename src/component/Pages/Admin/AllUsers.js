import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const AllUsers = () => {
    const [allUsers,setAllUsers]= useState()
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    useEffect(() => {
        fetch('https://best-furniture-server.vercel.app/allusers')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    console.log(allUsers);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure');
        if (proceed) {
            fetch(`https://best-furniture-server.vercel.app/allusers/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast('cancel successfully');
                        const remaining = allUsers.filter(ur => ur._id !== id);
                        setAllUsers(remaining);
                    }
                })
        }
    }
    return (
        <div className='lg:flex md:flex'>
            <div className='px-28 h-screen rounded-lg' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
                    {
                        isAdmin && <>
                            <ul>
                                <li><Link to="/dashboard"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Users</button></Link></li>
                                <li><Link to="/dashboard/allpayments"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Payments</button></Link></li>
                                <li><Link to="/dashboard/allproducts"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Products</button></Link></li>
                            </ul>
                        </>
                    }
            </div>
            <div className=' max-w-[1440px] mx-auto mt-10'>
                {
                    allUsers &&
                    allUsers.map(user => <div
                        key={user._id}
                        user={user}
                        className='lg:flex md:flex border my-3 px-20'
                    >
                        <div className='mt-10 mr-10'>
                            <h1 className='text-2xl font-bold'>{user.name}</h1>
                            <p className='text-lg font-bold text-red-500'>{user.email}</p>

                        </div>
                        <div className='mt-10 ml-10'>

                            <button onClick={() => handleDelete(allUsers._id)} className='bg-black text-white px-3 py-1 font-bold text-lg mx-5 rounded-lg'><FaTrash></FaTrash></button>

                        </div>
                    </div>)
                }
            </div>
        </div>
        
    );
};

export default AllUsers;
