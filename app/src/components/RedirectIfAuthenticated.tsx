import React from 'react'
import { Navigate } from 'react-router-dom'

const RedirectIfAuthenticated: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const token = localStorage.getItem('token')

    console.log('test' + token)
    if (token !== null && token !== undefined && token !== '') {
        return <Navigate to="/" />
    }

    return children
}

export default RedirectIfAuthenticated
