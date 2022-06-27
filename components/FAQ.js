import React from 'react'

export const FAQ = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center text-center space-y-8'>
          <p className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          <p className="max-w-2xl text-xl text-gray-500">Have questions about how we work and what you get? We&apos;ve got all the answers you need.</p>
        </div>

        <div className='bg-slate-100 mt-10 px-4 py-6 md:px-12 md:py-14 rounded-3xl md:grid md:grid-cols-2 items-start md:gap-x-4'>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg' open>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>Do I get unlimited creatives?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>How long does it take to receive my creatives back?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>How does the Video Ad Creatives work?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>How does the Image Ad Creatives work?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>What if I need over 50 creatives per day?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-lg md:text-xl font-semibold text-slate-600 inline'>Who works on my requests?</p>
            </summary>
            <div className='pt-8 md:pr-16 md:text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>

        </div>
      </div>
    </div>
  )
}
