import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { useSignup } from '../hooks/useSignup'

export default function Signup() {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [pass, setPass] = useState("")
  let [conform, setConform] = useState("")

  const navigate = useNavigate()
  const signupMutation = useSignup()


  let handleform = async (e) => {
    e.preventDefault()

    if (!name || !email || !pass) {
      toast.error("Please fill all required fields")
      return
    }

    if (pass != conform) {
      alert("password dont match")
      return
    }

    let payload = { UserName: name, UserEmail: email, Password: pass }

    signupMutation.mutate(payload, {
      onSuccess: () => {
        setName("")
        setEmail("")
        setPass("")
        setConform("")
        navigate('/login')
      }
    })

  }



  return (

    <div className='bg-[#dcfff9] flex justify-center items-center min-h-[70vh]'>

      <form className='flex flex-col w-60 items-center p-5 shadow-2xl rounded-2xl' onSubmit={handleform}>

        <h1 className='text-xl font-bold'>Signup</h1>

        <input className='border-b outline-none m-3 w-full' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' type="text" />
        <input className='border-b outline-none m-3 w-full' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type="email" />
        <input className='border-b outline-none m-3 w-full' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' type="password" />
        <input className='border-b outline-none m-3 w-full' value={conform} onChange={(e) => setConform(e.target.value)} placeholder='Confirm Password' type="password" />

        <button type='submit' disabled={signupMutation.isPending} className='bg-green-600 w-full rounded px-2 py-1 mt-2 text-white'>
          {signupMutation.isPending ? "Signing up..." : "Signup"}
        </button>


        <small className='mt-3 text-center'>
          Already have an Account?
          <Link to='/login' className='text-green-900 font-semibold ml-1'>Login</Link>
        </small>

      </form>

    </div>
  )
}
