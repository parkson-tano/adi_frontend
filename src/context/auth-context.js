import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, registerUser, logoutUser, getCurrentUser } from './actionAuth';
import { API_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getCurrentUser());
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [user]);



    const login = async (userData) => {
        const data = await loginUser(userData);
        setUser(data);
    };

    const register = async (userData) => {
        await registerUser(userData);
    };

    const logout = () => {
        logoutUser();
        navigate("/")
        setUser(null);
        setIsAuthenticated(false);
    };

    const checkAuth = () => {
        const user = getCurrentUser();
        setUser(user);
    };

    const value = {
        user,
        isAuthenticated,
        login,
        register,
        logout,
        checkAuth,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
