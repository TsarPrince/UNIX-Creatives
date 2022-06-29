import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  // on mobile view
  const showHiddenNavbarContent = () => {
    document.querySelector('.navbar-hidden').classList.toggle('hidden');
  }

  // typeof window === undefined on server side
  if (typeof window !== 'undefined') {
    const navbar = document.querySelector('#navbar');
    let prevScrollTop = 0;
    document.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > prevScrollTop) {
        navbar.style.top = `-${navbar.clientHeight}px`;
      } else {
        navbar.style.top = 0;
      }
      prevScrollTop = scrollTop;
    })
  }

  const handleClick = (event) => {
    const prev = document.querySelector('.nav-active');
    const current = event.target;
    prev.className = 'nav-inactive text-slate-600 hover:text-slate-500';
    current.className = 'nav-active text-blue-500 hover:text-blue-600';
  }

  return (
    <nav id='navbar' className='bg-white/50 fixed z-50 inset-x-0 top-0 backdrop-blur-2xl transition-all shadow-md'>
      <div className='relative flex justify-between items-center py-4 px-8'>
        <div className='flex-shrink-0'>
          <Image src='/logo.svg' width={127} height={24} alt='UNIX creatives logo'></Image>
        </div>
        <div className='navbar-hidden hidden bg-white py-4 text-lg font-semibold absolute top-full inset-x-0 flex flex-col items-center space-y-4 w-full shadow-md lg:relative lg:shadow-none lg:flex-row lg:justify-center lg:w-auto lg:space-y-0 lg:block lg:bg-transparent lg:space-x-12'>
          <Link href='/#home'><a className='nav-active text-blue-600 hover:text-blue-500' onClick={handleClick}>Home</a></Link>
          <Link href='/#services'><a className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Services</a></Link>
          <Link href='/#our-work'><a className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Our Work</a></Link>
          <Link href='/#pricing'><a className='nav-inactive text-slate-600 hover:text-slate-500' onClick={handleClick}>Pricing</a></Link>
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
    </nav>
  )
}
