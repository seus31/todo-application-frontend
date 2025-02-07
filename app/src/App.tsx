import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProtectedRoute from './components/ProtectedRoute.tsx'
import RedirectIfAuthenticated from './components/RedirectIfAuthenticated.tsx'
import AdminLogin from './pages/admin/AdminLogin.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Login from './pages/Login.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Register from './pages/Register.tsx'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/login" element={
                    <RedirectIfAuthenticated>
                        <Login />
                    </RedirectIfAuthenticated>
                } />
                <Route path="/register" element={
                    <RedirectIfAuthenticated>
                        <Register />
                    </RedirectIfAuthenticated>
                } />
                <Route path="/" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App
