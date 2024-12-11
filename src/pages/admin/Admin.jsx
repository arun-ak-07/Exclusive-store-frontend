import React, { useState } from 'react'
import Products from './Products'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Admin = () => {

    const [showSideBar, setShowSideBar] = useState(false)
    const [nav, setNav] = useState('')
    const navigate = useNavigate()


    const clickNav = () => {
        setNav('products')
        setShowSideBar(!showSideBar)
    }

  return (
    <div className='bg-gray-900 h-full w-full text-white flex flex-col'>
        <div className='bg-gray-800 flex md:justify-center justify-between items-center p-2'>
            <FaHome className='size-8 cursor-pointer' onClick={()=>navigate('/')} />
            <h2 className='text-center text-3xl font-bold p-4'>Admin Panel</h2>
            <button className='md:hidden text-xl'
            onClick={()=>setShowSideBar(!showSideBar)}
            >
            ☰
            </button>
        </div>

        <div className='flex md:flex-row flex-col w-full h-full'>
            <div className={`${showSideBar ? 'block' : 'hidden'} md:block md:w-1/5 p-4 w-full bg-gray-700 border-sky-500`}>
                <ul>
                    <li className='p-2 hover:bg-gray-800 cursor-pointer'>Dashboard</li>
                    <li className='p-2 hover:bg-gray-800 cursor-pointer'>Users</li>
                    <li className='p-2 hover:bg-gray-800 cursor-pointer' onClick={clickNav}>Products</li>
                    <li className='p-2 hover:bg-gray-800 cursor-pointer'>Settings</li>
                </ul>
            </div>
            <div className='md:w-4/5 p-4 w-full'>
                {
                    nav === 'products'? 
                    (
                    <>
                    <Products/>
                    </>
                    ) : (
                    <div className='h-screen'>
                    <h3 className='md:text-2xl text-lg font-semibold mb-4'>Welcome to the Admin Panel</h3>
                    <p className='text-gray-300 md:text-base text-xs'>Here you can manage users, products, and settings.</p>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Admin
