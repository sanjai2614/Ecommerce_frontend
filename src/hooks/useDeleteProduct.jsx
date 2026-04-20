import { useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteProduct } from "../api/productApi"
import { toast } from "react-toastify"

export const useDeleteProduct=()=>{

    const queryClient=useQueryClient()
    return(
        useMutation({
            mutationFn:deleteProduct,
            onSuccess:()=>{
                toast.success("product deleted",{toastId:"delete-success"})
                queryClient.invalidateQueries({queryKey:['products']})
            },
            onError:(err)=>{
                toast.error("Error can't delete",{toastId:"delete-fail"})
                // console.log(err)
            }
        })
    )
}