import React from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext";
import { useLogout } from "../components/useLogout";
import { handleLogout } from "../utils/handleLogout";
export default function UserDashboard() {

  const navigate = useNavigate()

    const {user}=useAuth();

const { mutate: logoutUser } = useLogout();



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
            <h3 className="text-lg font-semibold">{user?.UserName}</h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="text-lg font-semibold">{user?.UserEmail}</h3>
          </div>

        </div>

        <button
          onClick={()=>handleLogout(logoutUser,navigate)}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  )
}