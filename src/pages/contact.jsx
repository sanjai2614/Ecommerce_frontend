import React, { useState } from "react";
import { useSendContact } from "../hooks/useSendContact";

export default function Contact() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")

    const {mutate,isPending}=useSendContact()

    const handleForm=(e)=>{

        const payload={name,email,message}
        e.preventDefault()
        mutate(payload)
        setName('')
        setEmail('')
        setMessage('')
    }




  return (
    <div className="min-h-screen bg-[#dcfff9] flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="p-8 flex flex-col justify-center bg-[#eafffc]">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have questions or need help? Feel free to reach out to us anytime.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📧 support@example.com</p>
            <p>📞 +91 98765 43210</p>
            <p>📍 Hosur, Tamil Nadu</p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-8 bg-[#eafffc]">

          <form className="space-y-5" onSubmit={handleForm}>

            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea value={message} onChange={(e)=>setMessage(e.target.value)}
                rows="4"
                placeholder="Type your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
                disabled={isPending}
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              {isPending?"Sending...":"Send Message"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}