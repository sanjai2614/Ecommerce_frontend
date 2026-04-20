import { useQuery ,useMutation,useQueryClient} from "@tanstack/react-query";
import { getWishlist,addToWishlist,removeWishlist } from "../api/wishlistApi";
import { toast } from "react-toastify";

export const useWishlist=(userId)=>{
    return useQuery({
        queryKey:['wishlist',userId],
        queryFn:()=>getWishlist(userId),
        enabled:!!userId
    })
}

export const useAddWishlist=()=>{
    const qc = useQueryClient()
    return useMutation({
        mutationFn:addToWishlist,
        onSuccess:()=>{
            toast.success("addded to liked",{toastId:"like",theme:"colored"})
            qc.invalidateQueries(['wishlist'])
        },onError:()=>{
            toast.error("failed to add liked",{toastId:"like-fail"})
        }
    })
}

export const useRemoveWishlist=()=>{
    const qc = useQueryClient()
    return useMutation({
        mutationFn:removeWishlist,
        onSuccess:()=>{
            qc.invalidateQueries(['wishlist'])
        }
    })
}