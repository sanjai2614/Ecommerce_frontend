import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLogin } from '../hooks/useLogin'
import { useAuth } from '../context/authContext'
export default function Login() {

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const {refetch}=useAuth()
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
     

    let payload = { UserEmail: email, Password: pass }
    loginMutation.mutate(payload,{

      onSuccess:async(res)=>{
      
        setEmail("")
        setPass("")
        console.log(res)
         console.log("Login Success");
        await refetch()
        console.log('refetch')
        navigate('/')
      },
      onError:(err)=>{
        console.log(err.message);
        
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
