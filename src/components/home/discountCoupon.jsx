import React from 'react'
import discount from '../../assets/discount-banner.jpg'


export default function DiscountCoupon() {
  return (
    <div>
      {/* Discount Coupon */}
      
            <div style={{ backgroundImage: `url(${discount})`, backgroundPosition: 'top' }} className=' w-full h-70 bg-cover md:pl-100 lg:pl-155 px-10 flex flex-col justify-center items-center text-center'>
              {/* <div className='absolute inset-0 bg-black/30'></div> */}
              <div >
                <h1 className='text-xl lg:text-4xl font-bold'>Get <span className='text-green-600'>20% </span>Off Discount Coupon</h1>
                <p className=''>by Subscribe our Newsletter</p>
              </div>
              <div className='mt-5'>
                <form action="" className='flex flex-col sm:flex-row '>
                  <input type="email" placeholder='EMAIL ADDRESS' className='bg-[#dcfff9] p-3 outline-none rounded-t sm:rounded-l ' />
                  <button type='submit' className='p-3 bg-yellow-500 rounded-b sm:rounded-r cursor-pointer'>Get the Coupon</button>
                </form>
              </div>
            </div>
    </div>
  )
}
