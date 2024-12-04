"use client";

import { useAuth } from "@/contexts/authContext"
import { FormEvent, useState } from "react"
import { signInWithEP, signInWithGoogle } from "@/firebase/auth"
import { FaUser, FaLock } from "react-icons/fa"

export default () => {
    const { userLoggedIn } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signingIn, setSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!signingIn) {
            setSigningIn(true)
            await signInWithEP(email, password)
        }
    }

    const onGoogleSignIn = async (e: Event) => {
        e.preventDefault()

        if (!signingIn) {
            setSigningIn(true)
            signInWithGoogle().catch((err) => setSigningIn(false))
        }
    }

    return (
        <div className="m-0 h-[100vh] w-[100vw] bg-triangles grid justify-center items-center bg-center bg-cover">
            <form onSubmit={onSubmit} className="m-10 w-[75vw] sm:w-[50vw] lg:w-[30vw] xl:[10vw] text-white rounded-lg p-8 bg-transparent border-solid border-2 border-[rgba(255,255,255,.2)] backdrop-blur-3xl shadow-xl">
                <h1 className="text-4xl text-center">Login</h1>
                <div className="w-[100%] mt-[30px] relative h-10">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required className="w-full h-full bg-transparent outline-none border-2 border-solid border-[rgba(255,255,255,.2)] rounded-full placeholder:text-white pt-5 pb-5 pl-5 pr-10"/>
                    <FaUser size="20px" className="absolute right-5 top-[50%] translate-y-[-50%]"/>
                </div>

                <div className="w-[100%] mt-[30px] relative h-10">
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" required className="w-full h-full bg-transparent outline-none border-2 border-solid border-[rgba(255,255,255,.2)] rounded-full placeholder:text-white pt-5 pb-5 pl-5 pr-10"/>
                    <FaLock size="20px" className="absolute right-5 top-[50%] translate-y-[-50%]"/>
                </div>

                <div className="flex justify-between text-sm mt-[15px] mb-[15px] mx-5">
                    <label><input type="checkbox" className="accent-white mr-1"/> Remember me</label>
                    <a href="#" className="hover:underline">Forgot Password?</a>
                </div>

                <button type="submit" className="w-full h-[45px] bg-white mt-5 rounded-full border-none outline-none shadow-sm cursor-pointer text-[#333] text-lg font-semibold">Login</button>
            </form>
        </div>
    )
}