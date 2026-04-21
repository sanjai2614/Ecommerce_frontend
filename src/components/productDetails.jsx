import axios from 'axios';
import React, {useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useAddcart } from '../hooks/useAddToCart';
import { useGetProductsById } from '../hooks/useGetProductsById';
import ProductDetailsSkeleton from './productdetailSkeleton';
import { getUser } from '../utils/getUser';
import { handleBuyNow } from '../utils/deliveryFunction';

export default function ProductDetails() {

  const user = getUser()

 
  const { id } = useParams();
  const { mutate: addToCart, isLoading: cartLoading } = useAddcart()


    let {data,isLoading,error} = useGetProductsById(id)

if(isLoading) return <ProductDetailsSkeleton/>   
if(error) return <h1>error</h1>
      
 


  return (
    <div className="min-h-screen bg-[#dcfff9] flex justify-center items-center p-5">

      {
         
          <div className="bg-white rounded-2xl shadow-lg p-5 md:p-10 grid md:grid-cols-2 gap-10 max-w-5xl w-full">

            {/* Image */}
            <div className="flex justify-center items-center">
              <img
                src={data.image}
                alt={data.name}
                className="w-80 h-80 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col items-center justify-center gap-5">

              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                {data.name}
              </h1>

              <p className="text-gray-500">
                {data.description || "No description available"}
              </p>

              <h2 className="text-3xl font-semibold flex gap-2 text-green-600">
                <span className="text-red-600 line-through">₹{data.price}</span>
                ₹{data.discountPrice}
              </h2>

              <div className="flex gap-4">
                <button className="bg-green-600 text-white hover:cursor-pointer px-6 py-2 rounded-lg hover:bg-green-700 transition"
                 disabled={cartLoading}
                         onClick={(e) => {
                           e.stopPropagation()
                           if(!user) return toast.error("please login",{theme:"colored"})
                           addToCart(data._id)
                         }}
                 >
                {cartLoading ? "Adding..." : "Add to Cart"} 
        <i className="ri-shopping-cart-line ml-1"></i>
                </button>

                <button className="border text-white cursor-pointer border-gray-300 px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-800 transition"
                onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>

            </div>

          </div>

      }

    </div>
  )
}
