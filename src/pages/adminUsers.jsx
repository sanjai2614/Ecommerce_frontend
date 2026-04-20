import React from 'react'
import { useUsers } from '../hooks/useUsers'

export default function AdminUsers() {

    const {data,isLoading,error}=useUsers()

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>Error</h1>

 return (
  <div className="min-h-screen bg-[#dcfff9] p-6">
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6 text-center">
        Users List
      </h2>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No users found</p>
      ) : (
        <div className="space-y-4">
          {data.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border p-4 rounded-lg hover:shadow-md transition"
            >
              <div>
                <h3 className="font-semibold text-lg">
                 UserName: {item.UserName}
                </h3>
                <p className="text-gray-500 text-sm">
                 UserEmail {item.UserEmail}
                </p>
                <p className="text-gray-500 text-sm">
                 Role {item.role}
                </p>
              </div>

              {/* <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                  View
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Delete
                </button> 
              </div> */}
            </div>
          ))}
        </div>
      )}

    </div>
  </div>
)
}
