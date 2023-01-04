import React from 'react';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <div className=' bg-black text-white font-bold'>
            <div className='max-w-[1440px] mx-auto flex p-20'>
                <div className='w-3/4'>
                    <h1 className='text-3xl mb-10'>Best Furniture</h1>
                    <FacebookRoundedIcon className='mr-3' />
                    <SubscriptionsRoundedIcon className='mr-3' />
                    <TwitterIcon />
                </div>
                <div>
                    <ul className='p-5'>
                        <li><Link>About</Link></li>
                        <li><Link>Products</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Pay With</Link></li>
                    </ul>
                </div>
               
            </div>
            <p className='p-5'>© 2022 Best Furniture  | Developed by Sheikh Mohammad Ikhtear Uddin</p>
        </div>
    );
};

export default Footer;