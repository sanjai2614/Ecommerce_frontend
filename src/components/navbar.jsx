import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import { useGetCart } from '../hooks/useGetCart'
import { getUser } from '../utils/getUser'
import { useWishlist } from '../hooks/useWishlist'
import { toast } from 'react-toastify'

export default function Navbar() {

  const [bar, setBar] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const sidebarRef = useRef()
  const dropdownRef = useRef()

  const toggle = () => {
    setBar(!bar)
  }

  const navigate = useNavigate()

  // 👉 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false)
      }
       if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setBar(false)
    }}

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)

  }, [bar])

  const user = getUser()
  const userId = user?._id

  const role = user?.Role

  // cart count
  const { data: cart } = useGetCart(userId);
  const cartCount = cart?.products?.length || 0


  // wishlist count 
  const { data: wishlist } = useWishlist(userId)

  const wishlistCount = wishlist?.length || 0

  const handleClick = () => {
    if (role === "admin") {
      navigate("/admin")
    } else if (role === "user") {
      navigate("/user/dashboard")
    } else {
      navigate("/login")
    }
  }
  return (
  <header className='w-full lg:static top-0 left-0 bg-white font-sans'>

    {/* 🔹 Navbar Top */}
    <div className="h-21 bg-green-300 md:bg-[#dcfff9] flex items-center justify-between w-full px-3 py-1">
      <div className="container mx-auto flex items-center justify-between">

        {/* Menu Icon (mobile only) */}
        <span onClick={toggle} className="inline md:hidden">
          <i className="ri-menu-line text-3xl"></i>
        </span>

        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-6 lg:h-auto" />
        </Link>

        {/* Search */}
        <div className="hidden md:block">
          <form className="flex">
            <input
              type="search"
              placeholder="Search Fruits..."
              className="border border-green-300 px-2 h-10 focus:outline-none"
            />
            <button className="px-4 bg-green-600 text-white hover:bg-green-700">
              Search
            </button>
          </form>
        </div>

        {/* User */}
        <div>
          <button onClick={handleClick}>
            <i className="ri-user-line cursor-pointer text-3xl text-green-600"></i>
          </button>
        </div>
      </div>
    </div>

{bar && (
    <div
      className="fixed inset-0 bg-black/40 z-40 md:hidden"
      onClick={() => setBar(false)}
    ></div>
  )}
    {/* 🔹 Navbar Bottom / Side Menu */}
    <div
    ref={sidebarRef}
    className={`
      fixed md:static top-0 left-0 h-screen md:h-auto min-w-[50%] md:w-full
      bg-[#dcfff9] md:bg-green-600
      transform ${bar ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
      transition duration-300 z-50
    `}>

      {/* ❌ Close Button (mobile only) */}
      <div className="flex justify-end p-4 md:hidden">
        <button onClick={() => setBar(false)}>
          <i className="ri-close-line text-3xl text-black"></i>
        </button>
      </div>

      <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center'>

        {/* Category */}
<div className="relative w-full md:w-auto">
  <select
    className="
      w-fit md:w-auto
      bg-white md:bg-transparent
      text-black md:text-white
      border border-gray-300 md:border-none
      px-3 py-2 rounded md:rounded-none
      focus:outline-none
      cursor-pointer
    "
  >
    <option className="text-black text-sm" value="all">All categories</option>
    <option className="text-black text-sm" value="fruits">Fruits</option>
    <option className="text-black text-sm" value="veg">Vegetables</option>
  </select>
</div>

        {/* Menu */}
        <ul className='flex flex-col md:flex-row gap-2 md:gap-10 lg:gap-14 py-6 text-black md:text-white'>

  <li>
    <Link
      to={'/'}
      onClick={() => setBar(false)}
      className="
        block px-3 py-2 rounded
        hover:bg-gray-200 active:bg-gray-300
        md:hover:bg-transparent md:px-0 md:py-0
      "
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to={'/products'}
      onClick={() => setBar(false)}
      className="
        block px-3 py-2 rounded
        hover:bg-gray-200 active:bg-gray-300
        md:hover:bg-transparent md:px-0 md:py-0
      "
    >
      Shop
    </Link>
  </li>

  {/* Dropdown */}
  <li
    ref={dropdownRef}
    className='relative flex flex-col md:flex-row items-start md:items-center cursor-pointer w-full md:w-auto'
    onMouseEnter={() => window.innerWidth >= 1024 && setDropdown(true)}
    onMouseLeave={() => window.innerWidth >= 1024 && setDropdown(false)}
  >

    <span
      className="
        flex items-center gap-1
        w-full md:w-auto px-3 py-2 rounded
        hover:bg-gray-200 active:bg-gray-300
        md:hover:bg-transparent md:px-0 md:py-0
      "
      onClick={() => setDropdown(!dropdown)}
    >
      Pages
      <i className={`ri-arrow-down-s-line transition ${dropdown ? "rotate-180" : ""}`}></i>
    </span>

    <ul className={`
      ${dropdown ? "block" : "hidden"}
      md:absolute md:top-full md:left-0
      pt-2 z-30 w-full md:w-auto
    `}>
      <div className='bg-white text-black rounded shadow-lg min-w-45'>

        <li className='px-3 py-2 hover:bg-gray-200 active:bg-gray-300'>
          <Link to={'/privacy-policy'} onClick={() => {
            setDropdown(false)
            setBar(false)
          }}>
            Privacy Policy
          </Link>
        </li>

        <li className='px-3 py-2 hover:bg-gray-200 active:bg-gray-300'>
          <Link to={'/terms-and-conditions'} onClick={() => {
            setDropdown(false)
            setBar(false)
          }}>
            Terms & Conditions
          </Link>
        </li>

        <li className='px-3 py-2 hover:bg-gray-200 active:bg-gray-300'>
          <Link to={'/faq'} onClick={() => {
            setDropdown(false)
            setBar(false)
          }}>
            FAQ
          </Link>
        </li>

      </div>
    </ul>
  </li>

  <li>
    <Link
      to={'/about'}
      onClick={() => setBar(false)}
      className="
        block px-3 py-2 rounded
        hover:bg-gray-200 active:bg-gray-300
        md:hover:bg-transparent md:px-0 md:py-0
      "
    >
      About
    </Link>
  </li>

  <li>
    <Link
      to={'/contact'}
      onClick={() => setBar(false)}
      className="
        block px-3 py-2 rounded
        hover:bg-gray-200 active:bg-gray-300
        md:hover:bg-transparent md:px-0 md:py-0
      "
    >
      Contact
    </Link>
  </li>

</ul>

        {/* Icons */}
        <div className="flex gap-5 text-2xl text-black md:text-white">

          {/* Wishlist */}
          <Link to={'/wishlist'}>
            <div className="relative cursor-pointer" onClick={() => setBar(false)}>
              {/* <i className="ri-poker-hearts-line"></i> */}
              🤍

              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>

          {/* Cart */}
          <Link to="/cart">
            <div className="relative cursor-pointer" onClick={() => setBar(false)}>
              <span>🛒</span>

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

        </div>

      </div>
    </div>

  </header>
)
}
