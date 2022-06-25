import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav>
      <div className='flex justify-around items-center py-4'>
        <div className='flex-shrink-0'>
          <Image src='/logo.svg' width={127} height={24} alt='UNIX creatives logo'></Image>
        </div>
        <div className='text-slate-600 space-x-12 text-lg font-semibold hidden lg:inline-block'>
          <Link href='/'><a className='text-indigo-500 hover:text-indigo-600'>Home</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Services</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Our Work</a></Link>
          <Link href='/'><a className='hover:text-slate-500'>Pricing</a></Link>
        </div>
        <div>
          <button className='bg-indigo-600 text-slate-50 text-lg px-8 py-3 rounded-md shadow-md font-medium select-none hover:shadow-lg hover:bg-indigo-700'>Get Started</button>
        </div>
      </div>

    </nav>
  )
}
