import React from 'react'
import Cookies from "js-cookie"
import CryptoJS from "crypto-js"
import { useGetCart } from '../hooks/useGetCart'
import { useUpdateQty } from '../hooks/useUpadateQty'
import { useRemoveItem } from '../hooks/useRemoveItem'
import { getUser } from '../utils/getUser'
import { handleBuyNow } from '../utils/deliveryFunction'

export default function Cart() {

  
  const user = getUser()
 console.log(user)
  const userId = user?._id

  const { data: cart, isLoading, error } = useGetCart(userId)
  const { mutate: updateQty } = useUpdateQty();
  const { mutate: removeItem } = useRemoveItem();

  if (isLoading) return <h1 className="text-center mt-10">Loading...</h1>
  if (error) return <h1 className="text-center mt-10 text-red-500">Error</h1>
  if (!userId) return <h1 className="text-center mt-10">Please login</h1>

  const products = cart?.products || []

  const total = products.reduce((acc, item) => {
    return acc + item.productId.price * item.quantity
  }, 0)

  return (
    <div className="p-6 bg-[#dcfff9] min-h-screen">

      <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT - CART ITEMS */}
        <div className="col-span-2 space-y-4">
          {
            products.map((item, index) => (
              <div key={index} className="flex gap-5 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">

                <img 
                  src={item.productId.image} 
                  className="w-28 h-28 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.productId.name}</h2>
                  <p className="text-gray-600 mt-1">₹{item.productId.price}</p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button 
                      className="px-3 py-1 border rounded-lg hover:bg-gray-200"
                      onClick={() => updateQty({
                        userId,
                        productId: item.productId._id,
                        action: "dec"
                      })}
                    >-</button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button 
                      className="px-3 py-1 border rounded-lg hover:bg-gray-200"
                      onClick={() => updateQty({
                        userId,
                        productId: item.productId._id,
                        action: "inc"
                      })}
                    >+</button>
                  </div>
                </div>

                {/* REMOVE BUTTON */}
                <button
                  className="bg-red-100 text-red-600 px-4 h-fit py-2 rounded-lg hover:bg-red-200 transition"
                  onClick={() => removeItem({
                    userId,
                    productId: item.productId._id
                  })}
                >
                  Remove
                </button>

              </div>
            ))
          }
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="bg-white p-5 rounded-xl shadow h-fit sticky top-5">

          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t my-3"></div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          {/* BUY BUTTON */}
          <button className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          onClick={handleBuyNow}
          >
            Buy Now
          </button>

        </div>

      </div>

    </div>
  )
}