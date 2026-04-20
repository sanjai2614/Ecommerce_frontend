import React from "react";
import { useGetContacts } from "../hooks/useGetContact";
import { useDeleteContact } from "../hooks/useDeleteContact";
export default function AdminContacts() {

  const { data, isLoading, error } = useGetContacts();
  const {mutate:deleteItem}=useDeleteContact()

  if (isLoading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (error) return <h1 className="text-center mt-10 text-red-500">Error</h1>;

  return (
    <div className="p-6 bg-[#dcfff9]">

      <h1 className="text-3xl font-bold mb-6">📩 Contact Messages</h1>

      <div className="space-y-4">
        {
          data?.contact?.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow">

              <h2 className="font-semibold text-lg">Name: {item.name}</h2>
              <p className="text-gray-600">Email: {item.email}</p>

              <p className="mt-2">Message: {item.message}</p>

              <button
        onClick={() => deleteItem(item._id)}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
        Delete
      </button>

        </div>
          ))
        }
      </div>

    </div>
  );
}