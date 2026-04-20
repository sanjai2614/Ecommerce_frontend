import axios from './axiosInstance'

//Signup POST
export const signupUser=async(payload)=>{
    const res= await axios.post('/signup',payload)
    return res.data
}

//Login POST
export const loginUser=async(payload)=>{
    const res =await axios.post('/login',payload)
    return res.data
}

// get users

export const getUsers=async()=>{
   const res= await axios.get('/admin/users')
    return res.data.data
}