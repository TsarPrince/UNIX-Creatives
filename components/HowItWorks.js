import React from 'react'
import Image from 'next/image'

export const HowItWorks = () => {
  return (
    <div className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center text-center space-y-8'>
          {/* Light bulb */}
          <svg width="84" height="72" viewBox="0 0 84 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.3403 18.2816C30.294 18.2816 22.1533 26.4223 22.1533 36.4687C22.1533 43.1357 28.248 50.1967 30.4721 56.3994C33.7813 65.6468 33.4142 71.1855 40.3403 71.1855C47.369 71.1855 46.8939 65.6738 50.2085 56.4372C52.438 50.2183 58.5274 43.0817 58.5274 36.4687C58.5274 26.4223 50.3813 18.2816 40.3403 18.2816ZM44.6266 63.2121L36.4319 64.2378C36.1404 63.3903 35.8273 62.4024 35.444 61.1068C35.4386 61.0906 35.4332 61.0744 35.4278 61.0528L45.6577 59.7734C45.512 60.2592 45.3554 60.7721 45.2204 61.2309C45.0045 61.9759 44.8102 62.6237 44.6266 63.2121ZM34.942 59.4603C34.6397 58.467 34.2996 57.4143 33.9271 56.3076H46.7644C46.5592 56.9015 46.3595 57.4953 46.1813 58.0567L34.942 59.4603ZM40.3403 67.8817C38.6668 67.8817 37.8949 67.6874 37.0365 65.8142L44.0436 64.9342C43.0287 67.6712 42.2891 67.8817 40.3403 67.8817ZM48.0654 52.9985H32.6369C31.8109 51.2116 30.823 49.4247 29.8513 47.6811C27.692 43.8212 25.4679 39.8265 25.4679 36.4687C25.4679 28.2632 32.1402 21.5908 40.3457 21.5908C48.5512 21.5908 55.2236 28.2632 55.2236 36.4687C55.2236 39.8049 52.9941 43.8212 50.8347 47.7027C49.863 49.4409 48.8805 51.2224 48.0654 52.9985Z" fill="#2F55D4" />
            <path d="M40.3403 26.5465C34.8718 26.5465 30.4182 30.9948 30.4182 36.4687C30.4182 36.9275 30.7906 37.2946 31.2441 37.2946C31.703 37.2946 32.07 36.9222 32.07 36.4687C32.07 31.9125 35.7787 28.2038 40.3349 28.2038C40.7938 28.2038 41.1609 27.8313 41.1609 27.3779C41.1609 26.9244 40.7938 26.5465 40.3403 26.5465Z" fill="#2F55D4" />
            <path d="M2.02356 28.6749C4.41066 29.3665 6.78033 30.1468 9.18028 30.7906" stroke="#2F55D4" strokeWidth="3" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.4272 4.42365C19.5936 6.92699 20.9513 9.33252 22.1532 11.8168" stroke="#2F55D4" strokeWidth="3" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M53.0188 11.8166C54.7301 8.46684 56.0961 4.95416 57.7986 1.60133" stroke="#2F55D4" strokeWidth="3" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M71.8563 30.9314C75.1382 29.1719 78.5051 27.4316 81.6198 25.3838" stroke="#2F55D4" strokeWidth="3" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <p className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">How It Works</p>
          <p className="max-w-2xl text-xl text-gray-500">We are your all-in-one creative partner. From graphic design, content creation and more, we&apos;ve got you covered.</p>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden pt-8 md:flex-row lg:space-x-6'>
          <img src="/howItWorks_submit.png" width={248} height={288} alt='How it Works - Submit' ></img>
          <div className='hidden md:inline'>
            <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M62.9639 29.8777C42.8661 27.7669 22.2195 29.9732 2.05479 29.7025Z" fill="#161C2D" />
              <path d="M62.9639 29.8777C42.8661 27.7669 22.2195 29.9732 2.05479 29.7025" stroke="#161C2D" strokeWidth="2.42952" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M58.3094 22.9117C58.9168 27.2988 59.1444 31.6961 59.6787 36.083C62.1909 33.8575 66.1319 32.2315 68.2803 29.7016C68.7086 29.1977 66.4928 27.4133 66.2243 27.1858C64.0132 25.3144 60.7501 24.1857 58.188 22.8311" fill="#161C2D" />
              <path d="M58.3094 22.9117C58.9168 27.2988 59.1444 31.6961 59.6787 36.083C62.1909 33.8575 66.1319 32.2315 68.2803 29.7016C68.7086 29.1977 66.4928 27.4133 66.2243 27.1858C64.0132 25.3144 60.7501 24.1857 58.188 22.8311" stroke="#161C2D" strokeWidth="2.42952" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <img src="/howItWorks_review.png" width={248} height={288} alt='How it Works - Review'></img>
          <div className='hidden md:inline'>
            <svg width="70" height="60" viewBox="0 0 70 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M62.9639 29.8777C42.8661 27.7669 22.2195 29.9732 2.05479 29.7025Z" fill="#161C2D" />
              <path d="M62.9639 29.8777C42.8661 27.7669 22.2195 29.9732 2.05479 29.7025" stroke="#161C2D" strokeWidth="2.42952" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path fillRule="evenodd" clipRule="evenodd" d="M58.3094 22.9117C58.9168 27.2988 59.1444 31.6961 59.6787 36.083C62.1909 33.8575 66.1319 32.2315 68.2803 29.7016C68.7086 29.1977 66.4928 27.4133 66.2243 27.1858C64.0132 25.3144 60.7501 24.1857 58.188 22.8311" fill="#161C2D" />
              <path d="M58.3094 22.9117C58.9168 27.2988 59.1444 31.6961 59.6787 36.083C62.1909 33.8575 66.1319 32.2315 68.2803 29.7016C68.7086 29.1977 66.4928 27.4133 66.2243 27.1858C64.0132 25.3144 60.7501 24.1857 58.188 22.8311" stroke="#161C2D" strokeWidth="2.42952" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <img src="/howItWorks_approve.png" width={248} height={288} alt='How it Works - Approve'></img>
        </div>

        <div className="mt-10">
        </div>
      </div>
    </div>

  )
}
