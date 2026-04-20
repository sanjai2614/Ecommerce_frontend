import axios from "./axiosInstance";


// Get
export const getProducts=async()=>{
    const res= await axios.get('/products')
    return res.data.data
}

// Get Single Product
export const getProductsbyId=async(id)=>{
    const res = await axios.get(`/products/${id}`)
    return res.data.data
}


// Update
export const updateProduct=async({id,data})=>{
    const res=await axios.put(`/products/${id}`,data)
    return res.data.data
}

// Delete
export const deleteProduct=async(id)=>{
    const res=await axios.delete(`/products/${id}`)
    return res.data.data
}