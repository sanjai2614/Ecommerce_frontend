import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function RoleGuard({children,allowedRoles}){

   const {user,isLoading}=useAuth();

   if(isLoading) return <h2>Loading...</h2>

   if(!user){
      return <Navigate to="/login"/>
   }

   if(!allowedRoles.includes(user.role)){
      return <Navigate to="/" replace/>
   }

   return children;
}