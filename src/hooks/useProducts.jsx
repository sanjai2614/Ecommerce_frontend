import { getProducts } from "../api/productApi"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,

        onSuccess: () => {
            toast.success("data fetched", { toastId: "data-fetch" })
        },
        onError: () => {
            toast.error("failed to fetch data", { toastId: "data-fetch-fail" })
        }
    })
}