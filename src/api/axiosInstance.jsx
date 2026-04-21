import axios from "axios"
const URL = import.meta.env.VITE_API_URL

const axiosInstance =axios.create({
    baseURL:URL,
    headers:{"Content-Type":"application/json"}
})

export default axiosInstance