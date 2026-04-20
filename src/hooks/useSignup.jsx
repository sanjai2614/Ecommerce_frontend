import { useMutation } from "@tanstack/react-query"
import { signupUser } from "../api/userApi"
import { toast } from "react-toastify"

export const useSignup=()=>{
    return useMutation({
        mutationFn:signupUser,
        onSuccess:(data)=>{
            toast.success(data.msg ||"Signup Succesfully",{toastId:"signup-success"})
        },
        onError:(err)=>{
            toast.error(err.response?.data?.msg||"Error",{toastId:"signup-error"})
        }
    })
}