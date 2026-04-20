import React from 'react'
import logo from '../assets/logo.png'
import payment from '../assets/payment.png'


export default function Footer() {
return (
  <div className='bg-[#dcfff9]'>

    <div className='container mx-auto px-4'>

      {/* Footer 1 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-gray-300'>

        {/* Column 1 */}
        <div className='flex flex-col gap-4'>
          <img src={logo} alt="Logo" className='w-32 cursor-pointer' />

          <ul className='text-gray-500 flex flex-col gap-2 cursor-pointer'>
            <li className='hover:text-black'>Track Order</li>
            <li className='hover:text-black'>Delivery Returns</li>
            <li className='hover:text-black'>Warranty</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>About Us</h2>

          <ul className='text-gray-500 flex flex-col gap-2 cursor-pointer'>
            <li className='hover:text-black'>Rave's Story</li>
            <li className='hover:text-black'>Work With Us</li>
            <li className='hover:text-black'>Corporate News</li>
            <li className='hover:text-black'>Investors</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>Online Shop</h2>

          <ul className='text-gray-500 flex flex-col gap-2 cursor-pointer'>
            <li className='hover:text-black'>Furniture</li>
            <li className='hover:text-black'>Decoration</li>
            <li className='hover:text-black'>Kitchen</li>
            <li className='hover:text-black'>Interior</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold'>Useful Links</h2>

          <ul className='text-gray-500 flex flex-col gap-2 cursor-pointer'>
            <li className='hover:text-black'>Secure Payment</li>
            <li className='hover:text-black'>Privacy Policy</li>
            <li className='hover:text-black'>Terms Of Use</li>
            <li className='hover:text-black'>Archived Products</li>
          </ul>
        </div>

      </div>

      {/* Footer 2 */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-4 text-center md:text-left'>

        <p className='text-gray-500'>
          &copy;2026 <span className='text-black'>Marketo</span> All Rights reserved
        </p>

        <img src={payment} alt="payment" className='h-8 cursor-pointer' />

      </div>

    </div>
  </div>
)
}
