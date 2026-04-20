import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

export const getUser=()=>{
    const encrypted= Cookies.get('user')

    if(!encrypted) return null

    const secretKey= import.meta.env.VITE_SECRET_KEY

    try{
        const bytes = CryptoJS.AES.decrypt(encrypted,secretKey)
        const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        return user
    }catch(err){
        console.log(err,"Invalid User Cookie")
        return null
    }
}