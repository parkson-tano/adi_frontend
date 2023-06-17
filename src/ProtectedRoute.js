import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/auth-context";

// export const useAuth = () => {
//     const user = localStorage.getItem("token") ? true : false;
//     const userId = localStorage.getItem("userId")
//     const userHr = localStorage.getItem("ishr")
//     const superAdmin = localStorage.getItem('isSuperAdmin')
//     const role = localStorage.getItem('role')
//     const port = localStorage.getItem('port')
//     const department = localStorage.getItem('department')

//     return [user, userId, userHr, superAdmin, role, port, department];
// };

export const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
};
