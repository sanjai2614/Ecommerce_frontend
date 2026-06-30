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
import AuthGuard from './guards/authGuard'
import RoleGuard from './guards/RoleGuard'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from './pages/cart'
import { Navigate } from 'react-router-dom'
import AdminDashboard from './pages/adminDashboard'
import AdminProducts from './pages/adminProducts'
import { AdminEdit } from './pages/adminEditProduct'
import AdminUsers from './pages/adminUsers'
import UserDashboard from './pages/userDashboard'
import Contact from './pages/contact'
import AdminContacts from './pages/adminContact'
import Wishlist from './pages/wishlist'
import { useAuth } from './context/authContext'

function App() {

  const { user, isLoading } = useAuth()
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} theme='colored' />
      <Routes>
        <Route index path='/' element={<Hero />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={isLoading ? (<h2>Loading...</h2>) :
          user ? (<Navigate to="/" replace />) : (<Login />)}
        />
        <Route path='/products' element={<Products />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-and-conditions' element={<Terms />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={
          <AuthGuard>
            <Cart />
          </AuthGuard>
        } />
        <Route path='/wishlist'
          element={<AuthGuard>
            <Wishlist />
          </AuthGuard>} />
        <Route path="/user/dashboard" element={
          <AuthGuard>
            <UserDashboard />
          </AuthGuard>
        } />
        <Route path="/admin" element={
          <RoleGuard allowedRoles={['admin']}>
            <AdminDashboard />
          </RoleGuard>
        } />
        <Route path='/admin/products' element={
          <RoleGuard allowedRoles={['admin']}>
            <AdminProducts />
          </RoleGuard>
        } />
        <Route path='/admin/edit/:id' element={
          <RoleGuard allowedRoles={['admin']}>
            <AdminEdit />
          </RoleGuard>
        } />
        <Route path='/admin/users' element={
          <RoleGuard allowedRoles={['admin']}>
            <AdminUsers />
          </RoleGuard>
        } />
        <Route path='/admin/contact' element={
          <RoleGuard allowedRoles={['admin']}>
            <AdminContacts />
          </RoleGuard>
        } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
