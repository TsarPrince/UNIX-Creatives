import React from 'react'

export const Features = () => {
  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Stack The House In Your Favour</p>
        </div>

        <div className="mt-10">
          <table className="rounded-xl shadow-lg overflow-hidden mx-auto">
            <thead>
              <tr className="bg-slate-700 text-white">
                <th scope="col" className='px-12 py-6 text-lg font-normal'>Features</th>
                <th scope="col" className='px-12 py-6 text-lg font-normal'>Marketplace</th>
                <th scope="col" className='px-12 py-6 text-lg font-normal'>In-House Team</th>
                <th scope="col" className='px-12 py-6 text-lg font-normal'>Agencies</th>
                <th scope="col" className='px-12 py-6 text-lg font-normal bg-indigo-600'>Unik Creatives</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-blue-50">
                <th scope="row" className='text-slate-600 px-12  font-semibold'>Affordable</th>
                <td className='px-12 flex justify-center items-center'>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.48703" cy="9.34531" r="9.20761" fill="#CD3A3D" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6237 6.58033L13.5287 5.48535L7.99963 11.0145L5.44544 8.46026L4.35046 9.55524L7.99963 13.2044L14.6237 6.58033Z" fill="white" />
                  </svg>
                </td>
                <td className='p-6 flex justify-center items-center'>{'aadf'}</td>
                <td className='p-6 flex justify-center items-center'>adf
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.48703" cy="9.34531" r="9.20761" fill="#CD3A3D" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.6237 6.58033L13.5287 5.48535L7.99963 11.0145L5.44544 8.46026L4.35046 9.55524L7.99963 13.2044L14.6237 6.58033Z" fill="white" />
                  </svg>
                </td>
                <td className='p-6 flex justify-center items-center'>dsgsgregferg
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9.7839" cy="9.34531" r="9.20761" fill="#2EC57C" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.9206 6.58033L13.8256 5.48535L8.29651 11.0145L5.74231 8.46026L4.64734 9.55524L8.29651 13.2044L14.9206 6.58033Z" fill="white" />
                  </svg>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-blue-50">
                <th scope="row">Always Available</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
              <tr className="odd:bg-white even:bg-blue-50">
                <th scope="row">World-class Talent</th>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}
