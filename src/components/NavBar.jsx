import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';

const NavBar = () => {
  const [iseMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [nav, setNav] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!iseMenuOpen);
  const toggleSearch = () => setIsSearch(!isSearch);

  return (
    <nav className='flex flex-col'>

      <div className='bg-black p-4 flex flex-col justify-center md:flex-row sm:flex-row'>
        <p className='text-white text-center text-xs lg:text-base'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="#" className='text-white underline text-xs lg:ml-8 lg:text-base font-bold text-center mt-2 sm:mt-0'>
          Shop Now
        </a>
      </div>

      <div className='p-6 flex flex-row sm:justify-evenly items-center border-b justify-between relative'>

        <button className='md:hidden' onClick={toggleMenu}
          aria-label={iseMenuOpen ? "Close menu" : "Open menu"}>
          {iseMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <h2 className='font-bold text-xl tracking-wider'>Exclusive</h2>

        <div className='hidden md:flex space-x-12'>
          <Link className={`${nav === 'home' && 'underline'} font-semibold text-base`} to={'/Home'} onClick={() => setNav('home')}>Home</Link>
          <Link className={`${nav === 'contact' && 'underline'} font-semibold text-base`} onClick={() => setNav('contact')}>Contact</Link>
          <Link className={`${nav === 'about' && 'underline'} font-semibold text-base`} onClick={() => setNav('about')}>About</Link>
          <Link className={`${nav === 'signUp' && 'underline'} font-semibold text-base`} onClick={() => setNav('signUp')}>Sign Up</Link>
        </div>

        <div className='hidden md:flex bg-slate-100 px-4 py-2 rounded-full items-center'>
          <input 
            type="text" 
            placeholder='What are you looking for?' 
            className='text-sm p-0 text-black outline-none w-full bg-transparent' 
          />
          <CiSearch className='h-6 w-6 cursor-pointer text-gray-500' />
        </div>

        <CiSearch className='md:hidden h-7 w-7 cursor-pointer' onClick={toggleSearch} />

      </div>

      <div className={`md:hidden ${iseMenuOpen ? 'block' : 'hidden'} flex flex-col items-center`}>
        <Link className='block p-4' to={'/Home'} onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link className='block p-4' onClick={() => setIsMenuOpen(false)}>Contact</Link>
        <Link className='block p-4' onClick={() => setIsMenuOpen(false)}>About</Link>
        <Link className='block p-4' onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
      </div>

      <div className={`md:hidden ${isSearch ? 'flex' : 'hidden'} flex-col items-center bg-gray-100 p-4`}>
        <div className='flex justify-between items-center w-full'>
          <input 
            type="text" 
            placeholder='What are you looking for?' 
            className='text-sm p-2 w-full bg-white border rounded-full outline-none' 
          />
          <button onClick={toggleSearch} className='ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

    </nav>
  );
}

export default NavBar;
