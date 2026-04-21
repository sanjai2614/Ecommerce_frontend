import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAddcart } from '../hooks/useAddToCart'
import { useAddWishlist, useRemoveWishlist, useWishlist } from '../hooks/useWishlist'
import { getUser } from '../utils/getUser'
import Skeleton from './skeleton'

export default function ProductCard({ item }) {

  // 👤 USER
  const user = getUser()
  const userId = user?._id

  // 🚀 NAVIGATION
  const navigate = useNavigate()

  // 🛒 CART
  const { mutate: addToCart, isLoading: cartLoading } = useAddcart()

  // ❤️ WISHLIST
  const { mutate: addToWishlist } = useAddWishlist()
  const { mutate: removeWishlist } = useRemoveWishlist()
  const { data: wishlist, isLoading: wishlistLoading, error } = useWishlist(userId)

  // ⏳ HANDLE LOADING
  if (wishlistLoading) return <Skeleton/>
  if (error) return null

  // ❤️ CHECK IF LIKED
  const isLiked = wishlist?.some(
    (w) => w.productId?._id === item._id
  )

  // 🔁 TOGGLE FUNCTION
  const handleWishlist = (e) => {
    e.stopPropagation()

    if (!userId) {
      return toast.error("Please login first",{theme:"colored"})
    }

    if (isLiked) {
      removeWishlist({
        userId,
        productId: item._id
      })
    } else {
      addToWishlist({
        userId,
        productId: item._id
      })
    }
  }

  return (
    <div
      onClick={() => navigate(`/products/${item._id}`)}
      className="p-3 bg-white relative text-center shadow-lg rounded-lg hover:scale-105 cursor-pointer transition duration-300"
    >

      {/* ❤️ HEART BUTTON */}
      <button
        onClick={handleWishlist}
        className="absolute top-2 right-2 text-2xl hover:scale-110 transition"
      >
        {isLiked ? "❤️" : "🤍"}
      </button>

      {/* IMAGE */}
      <div
        style={{ backgroundImage: `url(${item.image})` }}
        className="w-full h-48 bg-cover bg-center rounded"
      />

      {/* CONTENT */}
      <div className="mt-2">
        <h1 className="font-semibold">{item.name}</h1>

        <h1 className="text-green-600 flex justify-center gap-2">
          <span className="text-red-600 line-through">
            ₹{item.price}
          </span>
          ₹{item.discountPrice}
        </h1>

        <h1>{item.rating}</h1>

        <p className="text-sm line-clamp-1">
          {item.description}
        </p>
      </div>

      {/* 🛒 ADD TO CART */}
      <button
        className="bg-green-600 cursor-pointer active:bg-green-800 rounded p-2 text-white w-full mt-2 disabled:opacity-50"
        disabled={cartLoading}
        onClick={(e) => {
          e.stopPropagation()
          if(!user) return toast.error("please login",{theme:"colored"})
          addToCart(item._id)
        }}
      >
        {cartLoading ? "Adding..." : "Add to Cart"} 
        <i className="ri-shopping-cart-line ml-1"></i>
      </button>

    </div>
  )
}