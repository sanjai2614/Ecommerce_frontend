import {useMutation, useQueryClient} from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { updateProduct } from '../api/productApi'

export const useUpdateProduct=()=>{
    const queryClient =useQueryClient()
    
    return useMutation({
        mutationFn:updateProduct,
        onSuccess:()=>{
            toast.success("data updated",{toastId:"update product"})
            queryClient.invalidateQueries({queryKey:['products']})
        },
        onError:()=>{
            toast.error("update failed",{toastId:"update fail"})
        }


    })



}