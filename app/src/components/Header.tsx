import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()

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
                        ログアウト
                    </button>
                </div>
            </div>
        </>
    )
}

export default Header
