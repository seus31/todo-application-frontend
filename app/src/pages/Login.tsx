import axios from 'axios'
import { useState } from 'react'
import { TEInput, TERipple } from 'tw-elements-react'
import { setAccessToken } from '../libs/auth.ts'
import './Login.css'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const param = { name: userName, password: password }
        const options = {
            method: 'POST',
            url: 'api/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: param,
        };

        axios(options)
            .then((response: { data: any }) => {
                setAccessToken(response.data.token)
            })
            .catch((error: any) => console.error(error));
    }

    return (
        <>
            <section className="h-screen">
                <div className="h-full">
                    {/* <!-- Left column container with background--> */}
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">

                        {/* <!-- Right column container --> */}
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <form>
                                {/* <!--Sign in section--> */}
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="mb-4 mr-4 text-2xl">Login</p>
                                </div>

                                {/* <!-- Email input --> */}
                                <TEInput
                                    type="text"
                                    label="User Name"
                                    size="lg"
                                    className="mb-6"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                ></TEInput>

                                {/* <!--Password input--> */}
                                <TEInput
                                    type="password"
                                    label="Password"
                                    className="mb-6"
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></TEInput>

                                {/* <!-- Login button --> */}
                                <div className="text-center lg:text-left">
                                    <TERipple rippleColor="light">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            onClick={handleSubmit}
                                        >
                                            Login
                                        </button>
                                    </TERipple>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login
