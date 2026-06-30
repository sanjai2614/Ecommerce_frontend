import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/userApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const { data: user, isLoading, refetch } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: false
    });

    return (
        <AuthContext.Provider value={{ user, isLoading, refetch }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);