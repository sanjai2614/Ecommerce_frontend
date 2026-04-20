import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import { getUser } from "../utils/getUser";

export default function RoleProtected({ children, allowedRoles }) {

  try {
    const user = getUser()
 
    // ❌ Invalid user
    if (!user) {
      return <Navigate to="/login" />;
    }

    // 🔥 ROLE CHECK
    if (!allowedRoles.includes(user.Role)) {
      return <Navigate to="/unauthorized" />;
    }

    // ✅ Access allowed
    return children;

  } catch (err) {
    return <Navigate to="/login" />;
  }
}