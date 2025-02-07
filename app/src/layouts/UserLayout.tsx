import React, { ReactNode } from 'react'
import Header from '../components/Header.tsx'
import Sidebar from '../components/Sidebar.tsx'

const UserLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="flex h-screen bg-gray-100">
                <Sidebar />

                <div className="flex flex-col flex-1 overflow-hidden">
                    <Header />
                    {children}
                </div>

            </div>
        </>
    )
}

export default UserLayout
