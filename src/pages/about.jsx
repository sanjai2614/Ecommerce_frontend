import React from 'react'
import about from '../assets/about-banner.png'

export default function About() {
  return (
    <div className='bg-[#dcfff9] py-4'>

    <div className='p-5 lg:container mx-auto  '>

        <h2>Home / About Us</h2>

                <h1 className='text-3xl font-bold text-center mt-4'>About Us</h1>
        <div className='flex flex-1 flex-col lg:flex-row gap-10 my-10 '>

                <div className='flex justify-center'>
                    <img src={about} alt="" className=' w-140 h-auto' />
                </div>
                <div className='flex flex-1 flex-col gap-5 justify-center'>

                  <h1 className='text-xl font-bold'>What is e-commerce business?</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>

                  <ul className='list-disc ml-4'>
                    <li>slim body with metal cover</li>
                    <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                    <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                    <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                  </ul>
                  <button className='bg-yellow-500 p-3 rounded w-fit'>Contact Us</button>
                </div>


        </div>
      
    </div>
    </div>
  )
}
