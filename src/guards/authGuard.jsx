import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthGuard({children}){

   const {user,isLoading}=useAuth();

   if(isLoading) return <h2>Loading...</h2>

   if(!user){
      return <Navigate to="/login"/>
   }

   return children;
}