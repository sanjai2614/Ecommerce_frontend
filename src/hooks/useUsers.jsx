import { getUsers } from "../api/userApi"
import { useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers,

        onSuccess: () => {
            toast.success("user data fetched", { toastId: "user-fetch" })
        },
        onError: () => {
            toast.error("failed to fetch user data", { toastId: "user-fetch-fail" })
        }
    })
}