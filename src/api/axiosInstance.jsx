import axios from "axios"
const URL = import.meta.env.VITE_API_URL

const axiosInstance =axios.create({
    baseURL:"https://ecommerce-server-pjl4.onrender.com",
    headers:{"Content-Type":"application/json"}
})

export default axiosInstance