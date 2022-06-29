import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  const showHiddenNavbarContent = () => {
    document.querySelector('.navbar-hidden').classList.toggle('hidden');
  }

  return (
    <nav>
      <div className='flex justify-between items-center py-4 px-8'>
        <div className='flex-shrink-0'>
          <Image src='/logo.svg' width={127} height={24} alt='UNIX creatives logo'></Image>
        </div>
        <div className='text-slate-600 space-x-12 text-lg font-semibold hidden lg:block'>
          <Link href='/'><a className='text-blue-500 hover:text-blue-600'>Home</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Services</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Our Work</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Pricing</a></Link>
        </div>
        <div className='hidden lg:block'>
          <button className='btn-rounded-md'>
            Get Started
          </button>
        </div>
        <div className='lg:hidden'>
          <button className='rounded-md p-3 focus:ring-4' onClick={showHiddenNavbarContent}>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.567871" y="0.0957031" width="23.4326" height="2.78481" fill="#161C2D" />
              <rect x="0.567871" y="8.24902" width="23.4326" height="2.78481" fill="#161C2D" />
              <rect x="0.567871" y="16.4033" width="5.39473" height="2.78481" fill="#2F55D4" />
              <rect x="9.5835" y="16.4033" width="14.4168" height="2.78481" fill="#161C2D" />
            </svg>
          </button>
        </div>
      </div>
      <div className='navbar-hidden text-slate-600 text-lg font-semibold space-y-4 py-4 flex flex-col items-center hidden lg:hidden'>
        <Link href='/'><a className='text-blue-500 hover:text-blue-600'>Home</a></Link>
        <Link href='/'><a className='hover:text-slate-500'>Services</a></Link>
        <Link href='/'><a className='hover:text-slate-500'>Our Work</a></Link>
        <Link href='/'><a className='hover:text-slate-500'>Pricing</a></Link>
      </div>

    </nav>
  )
}
