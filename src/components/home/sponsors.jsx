import React from 'react'
import sponsor1 from '../../assets/sponsors_1.png'
import sponsor2 from '../../assets/sponsors_2.png'
import sponsor3 from '../../assets/sponsors_3.png'
import sponsor4 from '../../assets/sponsors_4.png'
import sponsor5 from '../../assets/sponsors_5.png'

export default function Sponsors() {
  return (
    <div>
      {/* Sponsors */}
      
            <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 px-10 py-10 h-auto w-full bg-white '>
      
             <div className='flex justify-center'> <img src={sponsor1} alt="" /></div>
             <div className='flex justify-center'> <img src={sponsor2} alt="" /></div>
             <div className='flex justify-center'> <img src={sponsor3} alt="" /></div>
             <div className='flex justify-center'> <img src={sponsor4} alt="" /></div>
             <div className='flex justify-center'> <img src={sponsor5} alt="" /></div>
      
            </div>
    </div>
  )
}
