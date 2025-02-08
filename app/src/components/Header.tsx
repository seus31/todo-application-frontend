import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserInfoType } from '../types/UserTypes.ts'

const Header = () => {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)

    const fetchUserInfo = async () => {
        try {
            const token = localStorage.getItem("token")
            if (!token) throw new Error("No token")

            const response = await axios.get("/api/v1/user/info", {
                headers: {
                    'X-User-Token': token
                }
            })

            setUserInfo(response.data)
        } catch (error) {
            console.error("Failed to fetch user info:", error)
        }
    }

    useEffect(() => {
        fetchUserInfo()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
            <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <div className="flex items-center px-4"></div>
                <div className="flex items-center pr-4">
                    <button
                        className="mr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        onClick={handleLogout}>
                        {userInfo?.name} | ログアウト
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
