
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../component/hooks/useAdmin';
import Footer from '../component/Pages/Shared/Footer/Footer';
import Navbar from '../component/Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../Context/AuthProvider';



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1440px] mx-auto my-24'>
                {/* <div className='px-28 h-screen' style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
                    {
                        isAdmin && <>
                            <ul>
                                <li><Link to="/dashboard"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Users</button></Link></li>
                                <li><Link to="/dashboard/allpayments"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Payments</button></Link></li>
                                <li><Link to="/dashboard/allproducts"><button className='bg-black text-white px-5 py-3 font-bold text-lg mt-5 rounded-lg'>All Products</button></Link></li>
                            </ul>
                        </>
                    }
                </div> */}
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;