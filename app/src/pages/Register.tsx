import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TEInput, TERipple } from 'tw-elements-react'

const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async () => {
        const param = {
            name: userName,
            email: email,
            password: password,
            confirm_password: confirmPassword
        }
        const options = {
            method: 'POST',
            url: 'api/auth/register',
            headers: {
                'Content-Type': 'application/json'
            },
            data: param,
        };

        axios(options)
            .then((response: { data: any }) => {
                alert(response.data.message)
                navigate('/login')
            })
            .catch((error: any) => console.error(error));
    }

    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center">

                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>
                                <div className="flex flex-row items-center justify-center">
                                    <p className="mb-4 mr-4 text-2xl">Create an account</p>
                                </div>

                                <TEInput
                                    type="text"
                                    label="User Name"
                                    size="lg"
                                    className="mb-6"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                ></TEInput>

                                <TEInput
                                    type="email"
                                    label="Email address"
                                    size="lg"
                                    className="mb-6"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></TEInput>

                                <TEInput
                                    type="password"
                                    label="Password"
                                    className="mb-6"
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></TEInput>

                                <TEInput
                                    type="password"
                                    label="Confirm Password"
                                    className="mb-6"
                                    size="lg"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></TEInput>

                                <div className="text-center">
                                    <TERipple rippleColor="light">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            onClick={handleSubmit}
                                        >
                                            Register
                                        </button>
                                    </TERipple>

                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Login with your account?{" "}
                                        <a
                                            href="/login"
                                            className="text-primary transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700"
                                        >
                                            Login
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Register
