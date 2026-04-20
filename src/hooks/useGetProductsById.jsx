import { useQuery } from "@tanstack/react-query"
import { getProductsbyId } from "../api/productApi"
import { toast } from "react-toastify"

export const useGetProductsById=(id)=>{
    return useQuery({
        queryKey:['getById',id],
        queryFn:()=>getProductsbyId(id),
        enabled:!!id,
        onSuccess:()=>{
            toast.success("getted",{toastId:"e"})
        },
        onError:()=>{
            toast.error("err")
        }
    })
}