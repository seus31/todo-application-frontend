import axios from 'axios'
import { useState } from 'react'
import { TEInput, TERipple } from 'tw-elements-react'
import { setAdminAccessToken } from '../../libs/auth.ts'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const param = { email: email, password: password }
        const options = {
            method: 'POST',
            url: 'api/admin/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: param,
        };

        axios(options)
            .then((response: { data: any }) => {
                setAdminAccessToken(response.data.token)
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
                                    <p className="mb-4 mr-4 text-2xl">Login</p>
                                </div>

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

                                <div className="text-center">
                                    <TERipple rippleColor="light">
                                        <button
                                            type="button"
                                            className="inline-block rounded bg-danger px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
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

export default AdminLogin
