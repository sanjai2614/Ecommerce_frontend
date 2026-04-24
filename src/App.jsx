import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/signup'
import Login from './pages/login'
import Home from './components/home'
import Hero from './pages/hero'
import Privacy from './pages/privacy'
import Terms from './pages/terms'
import About from './pages/about'
import Faq from './pages/faq'
import Products from './pages/products'
import ProductDetails from './components/productDetails'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './pages/cart'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'
import RoleProtected from './components/roleProtected'
import AdminDashboard from './pages/adminDashboard'
import AdminProducts from './pages/adminProducts'
import { AdminEdit } from './pages/adminEditProduct'
import AdminUsers from './pages/adminUsers'
import UserDashboard from './pages/userDashboard'
import Contact from './pages/contact'
import AdminContacts from './pages/adminContact'
import Wishlist from './pages/wishlist'

function App() {


  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      {/* <Home/> */}
      <ToastContainer position="top-right" autoClose={3000} theme='colored'/>
      <Routes>
        <Route index path='/' element={<Hero />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' 
        element={
          Cookies.get('user')?<Navigate to='/' />:<Login />
      } />
        <Route path='/products' element={<Products />} />
        <Route path='/wishlist'
          element={<ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-and-conditions' element={<Terms />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={
          <ProtectedRoute>
          <Cart/>
          </ProtectedRoute>
          }/>
        <Route path="/admin" element={
          <RoleProtected allowedRoles={['admin']}>
            <AdminDashboard/>
          </RoleProtected>
        }  />
        <Route path='/admin/products' element={
          <RoleProtected allowedRoles={['admin']}>
            <AdminProducts/>
          </RoleProtected>
        }/>
        <Route path='/admin/edit/:id' element={
          <RoleProtected allowedRoles={['admin']}>
            <AdminEdit/>
          </RoleProtected>
        }/>
        <Route path='/admin/users' element={
          <RoleProtected allowedRoles={['admin']}>
            <AdminUsers/>
          </RoleProtected>
        } />
        <Route path='/admin/contact' element={
          <RoleProtected allowedRoles={['admin']}>
            <AdminContacts/>
          </RoleProtected>
        } />

        <Route path="/user/dashboard" element={<UserDashboard />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
