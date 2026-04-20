import React from 'react'
import juice1 from '../../assets/juice1.png'
import { Link } from 'react-router-dom'


export default function JuiceSection() {
  return (
    <div>
       <div className='flex flex-col sm:flex-row gap-10 p-5 sm:p-10'>
          <div>
            <img src={juice1} alt="orange juice" className=' w-200 h-auto' />

          </div>

          <div className=' flex flex-col gap-4 justify-center'>
            <h4 className='text-2xl font-serif text-green-500' style={{fontFamily:"pacifico"}}>Orange Juice</h4>
            <h1 className='text-4xl sm:text-6xl font-bold'>For Human Health</h1>
            <p className='text-gray-500'>Organic food is food produced by methods that comply with the standards of organic farming. Standards vary worldwide, but organic farming in general features.</p>
            <div className='flex flex-row flex-wrap gap-3'>

              <button className='border border-green-500 py-3 px-5 rounded-3xl w-fit hover:bg-green-500 cursor-pointer '>Learn More</button>
              <button className='bg-[#ff6251] py-3 px-5 text-white rounded-3xl w-fit hover:bg-[#fc5947] cursor-pointer '><Link to={"/products"}>Go Shop</Link></button>
            </div>
          </div>

        </div>

      </div>
  )
}
