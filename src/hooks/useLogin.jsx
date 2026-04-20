import { useMutation } from "@tanstack/react-query"
import { loginUser } from "../api/userApi"
import { toast } from "react-toastify"

export const useLogin=()=>{
    return useMutation({
        mutationFn:loginUser,
        onSuccess:(data)=>{
            toast.success(data.msg||"login Successfully",{toastId:"login-success",theme:"colored"})
            // localStorage.setItem("token",data.token)
        },
        onError:(err)=>{
            toast.error(err.response?.data?.msg||"error",{toastId:"login-error",theme:"colored"})
        }
    })
}