import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {
    
    const {logged} = useContext( AuthContext );

    const {pathname,search}=useLocation();
    const lasPath=pathname+search;
    localStorage.setItem('lasPath',lasPath);

    return (logged)
            ?children // puedes ir a donde sea si estas logeado
            : <Navigate to="/login" />
}
