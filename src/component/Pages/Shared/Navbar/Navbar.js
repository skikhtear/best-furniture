import { Fragment, useContext } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../../Context/AuthProvider';
import { FaUser } from "react-icons/fa";
import { FaTimes, FaAlignLeft , FaCartPlus} from "react-icons/fa";
import useAdmin from '../../../hooks/useAdmin';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div style={{ background: `url(https://img.freepik.com/free-photo/beige-wooden-textured-flooring-background_53876-104668.jpg?w=2000)`, }}>
            <Disclosure as="nav" className="bg-base-100">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <FaTimes className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <FaAlignLeft className="block h-6 w-6 " aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <p className='text-3xl font-bold'>Best Furniture</p>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block">
                                        <div className="ml-20">
                                            <ul className='flex space-x-4 font-bold'>
                                                <li><Link to={'/'}>Home</Link></li>
                                                <li><Link to={'/allproducts'}>All Products</Link></li>
                                                <li><Link to={'/homefurniture'}>Home Furniture</Link></li>
                                                <li><Link to={'/officefurniture'}>Office Furniture</Link></li>
                                                <li><Link to={'/hospitalfurniture'}>Hospital Furniture</Link></li>
                                                {
                                                    isAdmin &&
                                                    <li><Link to={'/dashboard'}>Dashboard</Link></li>

                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                    </button>
                                    <div className='mr-5'>
                                        <Link to={'/mycart'}><FaCartPlus style={{ height: '40px' }}></FaCartPlus></Link>
                                    </div>
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                <span className="sr-only">Open user menu</span>
                                                
                                                <div className="w-10 ">
                                                    {user?.photoURL ?
                                                        <img src={user?.photoURL} alt="" style={{ height: '40px' }} className='rounded-full mr-3' />
                                                        : <FaUser className='mx-auto'></FaUser>
                                                    }
                                                </div>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {/* <Menu.Item>
                                                <div className="w-10 rounded-full">
                                                    {user?.photoURL ?
                                                        <img src={user?.photoURL} alt="" style={{ height: '50px' }} className='rounded-full mr-3' />
                                                        : <FaUser className='mx-auto'></FaUser>
                                                    }
                                                </div>
                                            </Menu.Item> */}
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                                            <li>{
                                                                user?.uid ?
                                                                    <>
                                                                        <span className='mr-1'>{user?.displayName}</span>
                                                                        <button className="btn btn-outline btn-black text-black font-semibold align-middle" onClick={handleLogOut}>Logout</button>
                                                                    </>
                                                                    :
                                                                    <>
                                                                        <Link to='/login' className='mr-4'>Login</Link>
                                                                        <Link to='/signup' className='mr-4'>Signup</Link>
                                                                    </>
                                                            }</li>
                                                        </ul>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="ml-20">
                                <ul className='space-y-4 font-bold'>
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/allproducts'}>All Products</Link></li>
                                    <li><Link to={'/homefurniture'}>Home Furniture</Link></li>
                                    <li><Link to={'/officefurniture'}>Office Furniture</Link></li>
                                    <li><Link to={'/hospitalfurniture'}>Hospital Furniture</Link></li>
                                </ul>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}
