import React, { useEffect, useState } from "react"
import Cookies from "js-cookie"
import CryptoJS from "crypto-js"
import { useNavigate } from "react-router-dom"
import { getUser } from "../utils/getUser"

export default function UserDashboard() {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const user = getUser()
    setUser(user)
  }, [])

  const handleLogout = () => {
    if (window.confirm("Are u sure Log out?")) {
      Cookies.remove("user")
      navigate("/login")
      window.location.reload()   // 🔥 important
    }
  }

  if (!user) {
    return <h1 className="text-center mt-10">No user data</h1>
  }

  return (
    <div className="min-h-screen bg-[#dcfff9] flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          User Dashboard
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-gray-500">Name</p>
            <h3 className="text-lg font-semibold">{user.UserName}</h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="text-lg font-semibold">{user.UserEmail}</h3>
          </div>

        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  )
}