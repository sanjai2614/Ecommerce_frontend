import axios from "./axiosInstance";

export const addToWishlist = async(data)=>{
   await axios.post('/wishlist/add',data)
}

export const getWishlist =async(userId)=>{
   const res=await axios.get(`/wishlist/${userId}`)
    return res.data
}

export const removeWishlist =async(data)=>{
    await axios.post('/wishlist/remove',data)
}
