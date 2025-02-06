import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdminLogin from './pages/admin/AdminLogin.tsx'
import Login from './pages/Login.tsx'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
