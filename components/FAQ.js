import React from 'react'

export const FAQ = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='flex flex-col items-center text-center space-y-8'>
          <p className="text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</p>
          <p className="max-w-2xl text-xl text-gray-500">Have questions about how we work and what you get? We&apos;ve got all the answers you need.</p>
        </div>

        <div className='bg-slate-100 mt-10 px-12 py-14 rounded-3xl md:grid md:grid-cols-2 md:gap-x-4'>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg' open>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>Do I get unlimited creatives?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>No, you have a set limit based on the monthly plan you join. However, you do get unlimited logo designs and general graphic design requests.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>How long does it take to receive my creatives back?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>How does the Video Ad Creatives work?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>How does the Image Ad Creatives work?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>What if I need over 50 creatives per day?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>
          <details className='bg-white p-8 mb-4 rounded-lg shadow-lg max-w-lg'>
            <summary>
              <p className='text-xl font-semibold text-slate-600 inline'>Who works on my requests?</p>
            </summary>
            <div className='pt-8 pr-16 text-lg text-slate-500'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu massa eleifend, vehicula augue et, vulputate ante. Maecenas nec nulla quis purus lacinia egestas.</p>
            </div>
          </details>


          {/* <details className="-mt-2 mb-10 rounded-xl border px-6 py-3 open:pb-5">
            <summary className="font-medium cursor-default select-none text-slate-900">How does this compare to traditional CSS?</summary>
            <p>When writing CSS the traditional way, a single class name would do different things based on the current state.</p>
            <div className="flex items-start my-6 space-x-4">
              <div className="relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400">
                <svg width="6" height="6" className="overflow-visible" aria-hidden="true">
                  <path d="M0 0L6 6M6 0L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <div className="absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"></div>
              </div>
              <p className="m-0 flex-1 text-base font-semibold text-slate-900 dark:text-slate-200">Traditionally the same class name applies different styles on hover</p>
            </div>
          </details> */}
        </div>

      </div>

    </div>

  )
}
