import React from 'react'
import { Link } from 'react-router-dom'
import vegetable1 from '../../assets/vegetables1.png'

export default function HeroBanner() {
  return (
    <div >
      {/* Hero Banner */}
      <div className='px-3 py-7 sm:px-7 flex flex-col sm:flex-row items-center justify-between w-full min-h-120 gap-10'>
        <div className=' flex flex-col gap-4'>
          <h4 className='text-2xl font-serif text-green-500' style={{ fontFamily: "pacifico" }}>
            We introduced
          </h4>
          <h1 className='text-4xl sm:text-7xl font-bold'>
            Fresh Foods
          </h1>
          <p className='text-gray-500'>
            Organic food is food produced by methods that comply with the standards of organic farming.
          </p>
          <Link to={"/products"}>
            <button className='bg-[#ff6251] py-3 px-5 text-white rounded-3xl w-fit hover:bg-[#fc5947] cursor-pointer'>
              Go Shop
            </button>
          </Link></div>

        <div className='lg:w-160'>
          <img src={vegetable1} alt="banner2" className='w-full h-auto' />
        </div>
      </div>
    </div>
  )
}
