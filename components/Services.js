import React from 'react'

export const Services = () => {
  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-8 sm:gap-y-10">

            <div className='border px-8 py-4 space-y-4 bg-white rounded-md'>
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
                {/* <!-- Graphic Design --> */}
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2972 29.2868C19.2972 30.0822 18.6466 30.7325 17.8512 30.7325H13.5123C12.7169 30.7325 12.0664 30.0822 12.0664 29.2868V27.1171H19.2972V29.2868Z" fill="white" />
                  <path d="M14.2355 18.8775C14.2355 18.2049 14.5974 17.5924 15.3201 17.4313V8.39435H14.9587C14.9587 11.6478 11.2983 17.0708 9.17444 18.8775C9.17444 18.8775 12.0663 22.4926 12.0663 25.7461H15.6814V20.324C14.9587 20.324 14.2355 19.6771 14.2355 18.8775Z" fill="white" />
                  <path d="M16.4042 8.39435H16.0428V17.4313C16.7655 17.5924 17.128 18.2049 17.128 18.8775C17.128 19.6771 16.4042 20.324 15.6815 20.324V25.7461H19.2972C19.2972 22.4926 22.189 18.8775 22.189 18.8775C20.0652 17.0708 16.4042 11.6478 16.4042 8.39435Z" fill="white" />
                  <path d="M19.2972 25.6712H12.0664V27.1171H19.2972V25.6712Z" fill="white" />
                  <path d="M29.7834 16.6818C29.4629 16.6818 29.2039 16.4225 29.2039 16.1023C29.2039 10.4427 25.1821 5.93518 19.1965 4.8861C18.881 4.83073 18.6707 4.53008 18.7255 4.21487C18.7814 3.89995 19.0824 3.6944 19.3967 3.74418C25.9558 4.89449 30.3623 9.86074 30.3623 16.1023C30.3623 16.4225 30.1034 16.6818 29.7834 16.6818Z" fill="white" />
                  <path d="M1.51745 16.6818C1.19694 16.6818 0.937958 16.4226 0.937958 16.1023C0.937958 9.86047 5.34513 4.89451 11.9053 3.7442C12.2207 3.69358 12.5205 3.89997 12.5759 4.21489C12.6313 4.5301 12.4204 4.83075 12.1055 4.88613C6.11872 5.9352 2.09694 10.4428 2.09694 16.1023C2.09694 16.4226 1.8374 16.6818 1.51745 16.6818Z" fill="white" />
                  <path d="M12.7185 4.8694H3.90756V3.71069H12.7185V4.8694Z" fill="white" />
                  <path d="M27.6164 4.8694H18.9945V3.71069H27.6164V4.8694Z" fill="white" />
                  <path d="M30.0513 4.29049C30.0513 5.08505 29.4081 5.72746 28.6143 5.72746C27.82 5.72746 27.1773 5.08505 27.1773 4.29049C27.1773 3.49731 27.82 2.85321 28.6143 2.85321C29.4081 2.85321 30.0513 3.49731 30.0513 4.29049Z" fill="white" />
                  <path d="M28.6143 6.30666C27.5023 6.30666 26.5978 5.40219 26.5978 4.29047C26.5978 3.17846 27.5023 2.27399 28.6143 2.27399C29.7263 2.27399 30.6308 3.17846 30.6308 4.29047C30.6308 5.40219 29.7263 6.30666 28.6143 6.30666ZM28.6143 3.43268C28.1411 3.43268 27.7568 3.81724 27.7568 4.29047C27.7568 4.7634 28.1411 5.14795 28.6143 5.14795C29.0875 5.14795 29.4718 4.7634 29.4718 4.29047C29.4718 3.81724 29.0875 3.43268 28.6143 3.43268Z" fill="white" />
                  <path d="M4.1844 4.29049C4.1844 5.08505 3.54115 5.72746 2.74854 5.72746C1.95425 5.72746 1.31155 5.08505 1.31155 4.29049C1.31155 3.49731 1.95425 2.85321 2.74854 2.85321C3.54115 2.85321 4.1844 3.49731 4.1844 4.29049Z" fill="white" />
                  <path d="M2.74854 6.30666C1.63654 6.30666 0.732056 5.40219 0.732056 4.29047C0.732056 3.17846 1.63654 2.27399 2.74854 2.27399C3.85998 2.27399 4.76445 3.17846 4.76445 4.29047C4.76445 5.40219 3.85998 6.30666 2.74854 6.30666ZM2.74854 3.43268C2.27533 3.43268 1.89104 3.81724 1.89104 4.29047C1.89104 4.7634 2.27533 5.14795 2.74854 5.14795C3.22063 5.14795 3.60547 4.7634 3.60547 4.29047C3.60547 3.81724 3.22063 3.43268 2.74854 3.43268Z" fill="white" />
                  <path d="M18.5554 1.44104H12.8081V7.18983H18.5554V1.44104Z" fill="white" />
                  <path d="M19.1349 7.76902H12.228V0.861816H19.1349V7.76902ZM13.387 6.61031H17.976V2.02051H13.387V6.61031Z" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Graphic Design</p>
              <div className="text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

            <div className="border px-8 py-4 space-y-4 bg-white rounded-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-500 text-white">
                {/* <!-- Logo Design --> */}
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.5999 1.07742L19.6511 5.55028C20.7074 6.13715 20.7074 7.45721 19.6511 8.04408L18.2955 8.79718L19.6511 9.55028C20.7074 10.1371 20.7074 11.4572 19.6511 12.0441L18.2955 12.7972L19.6511 13.5503C20.7074 14.1371 20.7074 15.4572 19.6511 16.0441L11.5999 20.5169C10.9274 20.8906 9.95935 20.8906 9.28679 20.5169L1.23562 16.0441C0.179271 15.4572 0.179271 14.1371 1.23562 13.5503L2.59121 12.7972L1.23562 12.0441C0.179271 11.4572 0.179271 10.1371 1.23562 9.55028L2.59121 8.79718L1.23562 8.04408C0.179271 7.45721 0.179271 6.13715 1.23562 5.55028L9.28679 1.07742C9.95935 0.703768 10.9274 0.703768 11.5999 1.07742ZM11.5999 12.5169L16.2364 9.94114L17.7773 10.7972L16.2364 11.6532L14.1773 12.7972L10.6286 14.7686C10.5601 14.8067 10.3266 14.8067 10.2581 14.7686L6.70946 12.7972L4.65034 11.6532L3.10946 10.7972L4.65034 9.94114L9.28679 12.5169C9.95935 12.8906 10.9274 12.8906 11.5999 12.5169ZM4.65034 13.9411L3.10946 14.7972L10.2581 18.7686C10.3266 18.8067 10.5601 18.8067 10.6286 18.7686L17.7773 14.7972L16.2364 13.9411L11.5999 16.5169C10.9274 16.8906 9.95935 16.8906 9.28679 16.5169L4.65034 13.9411ZM10.2581 2.82573C10.3266 2.78766 10.5601 2.78766 10.6286 2.82573L17.7773 6.79718L10.6286 10.7686C10.5601 10.8067 10.3266 10.8067 10.2581 10.7686L3.10946 6.79718L10.2581 2.82573Z" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Logo Design</p>
              <div className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

            <div className="border px-8 py-4 space-y-4 bg-white rounded-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                {/* <!-- Image Ads --> */}
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M2.20557 0.79718H18.2056C19.3101 0.79718 20.2056 1.69261 20.2056 2.79718V18.7972C20.2056 19.9018 19.3101 20.7972 18.2056 20.7972H2.20557C1.101 20.7972 0.205566 19.9018 0.205566 18.7972V2.79718C0.205566 1.69261 1.101 0.79718 2.20557 0.79718ZM2.20557 2.79718V14.383L6.20557 10.383L9.70557 13.883L16.2056 7.38297L18.2056 9.38297V2.79718H2.20557ZM2.20557 18.7972V17.2114L6.20557 13.2114L11.7914 18.7972H2.20557ZM18.2056 18.7972H14.6198L11.1198 15.2972L16.2056 10.2114L18.2056 12.2114V18.7972ZM12.2056 6.79718C12.2056 5.14033 10.8624 3.79718 9.20557 3.79718C7.54871 3.79718 6.20557 5.14033 6.20557 6.79718C6.20557 8.45403 7.54871 9.79718 9.20557 9.79718C10.8624 9.79718 12.2056 8.45403 12.2056 6.79718ZM8.20557 6.79718C8.20557 6.2449 8.65328 5.79718 9.20557 5.79718C9.75785 5.79718 10.2056 6.2449 10.2056 6.79718C10.2056 7.34946 9.75785 7.79718 9.20557 7.79718C8.65328 7.79718 8.20557 7.34946 8.20557 6.79718Z" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Image Ads</p>
              <div className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

            <div className="border px-8 py-4 space-y-4 bg-white rounded-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white">
                {/* <!-- Video Ads --> */}
                <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.7438 3.13525V14.3157C21.7438 15.5506 20.7426 16.5517 19.5077 16.5517H12.7994V18.1548L17.8468 21.1832L16.6964 23.1007L12.7994 20.7625V23.26H10.5633V20.7625L6.66641 23.1007L5.51595 21.1832L10.5633 18.1548V16.5517H3.8551C2.62015 16.5517 1.61902 15.5506 1.61902 14.3157V3.13525H0.500977V0.89917H22.8618V3.13525H21.7438ZM3.85522 3.13525V14.3157H19.5078V3.13525H3.85522ZM7.20923 12.0796H9.44531V7.60743H7.20923V12.0796ZM12.7996 12.0796H10.5635V5.37134H12.7996V12.0796ZM13.9175 12.0796H16.1536V8.72547H13.9175V12.0796Z" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Video Ads</p>
              <div className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

            <div className="border px-8 py-4 space-y-4 bg-white rounded-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                {/* <!-- Landing Page Design --> */}
                <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.6727 0.704407H0.213409V19.4548C0.213409 20.5594 1.10884 21.4548 2.21341 21.4548H16.6727C17.7772 21.4548 18.6727 20.5594 18.6727 19.4548V0.704407ZM16.439 3.02873H2.44731V18.1304C2.44731 18.6827 2.89503 19.1304 3.44732 19.1304H15.439C15.9913 19.1304 16.439 18.6827 16.439 18.1304V3.02873Z" fill="white" />
                  <rect x="4.80298" y="5.27295" width="4.66655" height="4.66655" fill="white" />
                  <rect x="10.5967" y="6.42236" width="3.4343" height="2.36774" fill="white" />
                  <rect x="4.80298" y="11.1119" width="9.22816" height="2.30102" fill="white" />
                  <rect x="4.85553" y="14.5854" width="9.22816" height="2.30102" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Landing Page Design</p>
              <div className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

            <div className="border px-8 py-4 space-y-4 bg-white rounded-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-500 text-white">
                {/* <!-- Explore More --> */}
                <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M4.20532 7.07959V10.5796L0.205322 13.5796V19.0796H4.20532C4.20532 20.1842 5.10075 21.0796 6.20532 21.0796H8.20532V22.0796H10.2053V21.0796H12.2053C13.3099 21.0796 14.2053 20.1842 14.2053 19.0796H18.2053V13.5796L14.2053 10.5796V7.07959C14.2053 3.92351 12.2918 0.0795898 9.20532 0.0795898C6.11888 0.0795898 4.20532 3.92351 4.20532 7.07959ZM10.2053 19.0796H12.2053V9.07959V7.07959C12.2053 4.88683 10.8078 2.07959 9.20532 2.07959C7.6028 2.07959 6.20532 4.88683 6.20532 7.07959V9.07959V19.0796H8.20532V13.0796H10.2053V19.0796ZM2.20532 14.5796L4.20532 13.0796V17.0796H2.20532V14.5796ZM14.2053 17.0796V13.0796L16.2053 14.5796V17.0796H14.2053ZM9.20532 10.0796C8.10075 10.0796 7.20532 9.18416 7.20532 8.07959C7.20532 6.97502 8.10075 6.07959 9.20532 6.07959C10.3099 6.07959 11.2053 6.97502 11.2053 8.07959C11.2053 9.18416 10.3099 10.0796 9.20532 10.0796Z" fill="white" />
                </svg>
              </div>
              <p className="text-lg leading-6 font-medium text-gray-900">Explore More</p>
              <div className="mt-2 text-base text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}
