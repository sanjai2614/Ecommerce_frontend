import axios from "axios"

const axiosInstance =axios.create({
    baseURL:"https://ecommerce-server-pjl4.onrender.com",
    headers:{"Content-Type":"application/json"}
})

export default axiosInstance