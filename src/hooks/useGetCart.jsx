import { useQuery } from "@tanstack/react-query"
import { getCartByUser } from "../api/cartApi"

export const useGetCart=(userId)=>{
    return useQuery({
        queryKey:['cart',userId],
        queryFn:()=>getCartByUser(userId),
        enabled:!!userId
    })
}