import React from 'react'
import banner1 from '../../assets/banner-1.png'
import banner2 from '../../assets/banner-2.png'

export default function PromoBanner() {
  return (
    <div>
      {/* Banner */}
              <div className="p-5 flex flex-col gap-6 sm:flex-row my-10 justify-between">
      
                {/* Card 1 */}
                <div className="flex  flex-col lg:flex-row   items-center p-4 w-full sm:w-[48%] gap-5 bg-pink-300 ">
      
                  <img src={banner1} alt="banner" className="w-full sm:w-40 h-auto rounded-lg" />
      
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold">Lychee</h1>
                    <h1 className="text-3xl font-bold">Yogurt Juice</h1>
                    <p className="my-4 text-sm">
                      Vegetables are important part of healthy eating and provide many nutrients.
                    </p>
                  </div>
                </div>
      
                {/* Card 2 */}
                <div className="flex flex-col lg:flex-row items-center p-4 w-full sm:w-[48%] gap-5 bg-orange-300 ">
      
                  <img src={banner2} alt="banner" className="w-full sm:w-40 h-auto rounded-lg" />
      
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold">Aloe Vera</h1>
                    <h1 className="text-3xl font-bold">Normal Juice</h1>
                    <p className="my-4 text-sm">
                      Vegetables are important part of healthy eating and provide many nutrients.
                    </p>
                  </div>
                </div>
      
              </div>
    </div>
  )
}
