import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className="relative bg-white overflow-hidden shadow-inner">
      <div className="pt-16 pb-20 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="sm:max-w-lg flex content-center items-center">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Let experienced media buyers design your next <span className='text-indigo-600'>Ad Creatives.</span>
            </h1>
          </div>
          <div>
            <div className="mt-10 text-center">
              {/* <!-- Decorative image --> */}
              <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className='absolute'>
                  <svg width="399" height="232" viewBox="0 0 399 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 228.401C79.7383 222.751 142.674 94.2454 157.184 60.4276C173.95 21.3512 116.319 15.685 104.64 47.5871C93.6621 77.5771 173.825 111.676 244.8 107.349C301.579 103.888 360.388 42.7422 396.877 2.65039" stroke="#2F55D4" strokeWidth="5.30903" />
                  </svg>
                </div>
                <Image src="/HeaderImg.svg" width={582} height={387} alt='Header decorative img'></Image>
              </div>
              <div className='space-x-2 sm:space-x-8 lg:text-left'>
                <button className='bg-indigo-600 text-slate-50 text-lg px-8 py-3 rounded-md shadow-md font-medium select-none hover:shadow-lg hover:bg-indigo-700'>
                  <Link href='/'><a>Get Started</a></Link>
                </button>
                <button className='outline outline-offset-[-3px] outline-indigo-600 text-indigo-500 text-lg px-8 py-3 rounded-md font-medium select-none hover:shadow-lg hover:outline-transparent hover:bg-indigo-700 hover:text-slate-50'>
                  <Link href='/'><a>Schedule Demo</a></Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
