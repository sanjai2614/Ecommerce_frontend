import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLogin } from '../hooks/useLogin'
import  Cookies from "js-cookie"
import CryptoJS from 'crypto-js'

export default function Login() {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const navigate = useNavigate()

  const loginMutation =useLogin()

  const handleform = async (e) => {
    e.preventDefault()

    if (!email && !pass) {
      toast.error("Enter all details",{theme:"colored"})
      return
    }
    if(!email) return toast.error("Please Enter Email",{theme:"colored"})
    if(!pass) return toast.error("Please Enter Password",{theme:"colored"})
     
    const secretKey=import.meta.env.VITE_SECRET_KEY

    let payload = { UserEmail: email, Password: pass }
    loginMutation.mutate(payload,{

      onSuccess:(res)=>{
      
        setEmail("")
        setPass("")
        console.log(res)

      const userData={
          _id:res.data._id,
          UserEmail:res.data.UserEmail,
          UserName:res.data.UserName ||"",
          Role:res.data.role
        }
        console.log(userData)
        const encrypted=CryptoJS.AES.encrypt(JSON.stringify(userData),secretKey).toString()
        
        Cookies.set("user",encrypted,{expires:2/24})
        navigate('/')
      }
      
    })
    console.log(loginMutation)

  }



  return (
    <div className="bg-[#dcfff9] flex justify-center items-center min-h-[70vh]">

      <form className="flex flex-col w-60 items-center p-5 shadow-2xl rounded-2xl" onSubmit={handleform}>

        <h1 className="text-xl font-bold">Login</h1>

        <input className="border-b outline-none m-3 w-full" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />

        <input className="border-b outline-none m-3 w-full" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" type="password" />

        <button type='submit' disabled={loginMutation.isPending} className="bg-green-600 px-2 py-1 mt-2 active:bg-green-800 w-full text-white rounded">
          {loginMutation.isPending ? "Logging in..." : "Login"}
        </button>

        <small className="mt-3 text-center">
          Don't have an Account?
          <Link to="/signup" className="text-green-900 font-semibold ml-1">
            Signup
          </Link>
        </small>

      </form>

    </div>
  )
}
