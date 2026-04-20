import React from 'react'
import HeroBanner from '../components/home/heroBanner'
import FeaturedProducts from '../components/home/featuredProducts'
import PromoBanner from '../components/home/promoBanner'
import Sponsors from '../components/home/sponsors'
import JuiceSection from '../components/home/juiceSection'
import DiscountCoupon from '../components/home/discountCoupon'


export default function Hero() {

  return (
    <>
      <div className='bg-[#dcfff9]'>
        <div className='px-10 lg:container  mx-auto lg:px-5'>
          <HeroBanner />
          <FeaturedProducts />
          <PromoBanner />
          <Sponsors />
          <JuiceSection />
        </div>
        <DiscountCoupon />

      </div>
    </>
  )
}
