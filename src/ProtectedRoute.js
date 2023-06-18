import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./context/auth-context";


export const ProtectedRoute = () => {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
};
