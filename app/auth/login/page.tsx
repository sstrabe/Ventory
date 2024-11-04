'use client';

import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

export default function LoginPage() {
    const route = useRouter()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState('')
    const [pModifier, setPModifier] = useState('')
    const [uModifier, setUModifier] = useState('')

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!username) setUModifier('invalid'); else setUModifier('')
        if (!password) setPModifier('invalid'); else setPModifier('')
        if (!username || !password) return setError('Username and password is required')

        try {
            const form = { username, password }
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })

            if (!response.ok) {
                setError('Incorrect username or password')
                return
            }

            const data = await response.json()
            if (data.token) {
                route.push('/')
            } else {
                setError('Incorrect username or password')
            }
        } catch (e) {
            console.warn(e)
            setError('Failed to authenticate user')
        }
    }

    return (
        <div className="h-screen flex items-center justify-center flex-col text-lg text-gray-300 text-center">
            <form onSubmit={onSubmit} className="text-center bg-primary rounded-lg p-10 min-w-[20%] max-w-[80%] drop-shadow-xl">
                <h1 className="text-2xl m-4">Login</h1>

                {error && <p className="bg-icon px-3 p-1 rounded-md w-5/6 place-self-center m-4">{error}</p>}

                <input
                    className={`m-4 bg-zinc-900 rounded-md text-gray-300 p-1 px-3 w-5/6 transition-all duration-500 ${uModifier}`}
                    type="text"
                    placeholder="Username"
                    id="username"
                    value={username}
                    minLength={1}
                    onChange={e => {setUsername(e.target.value || ''); setUModifier('')}}
                />

                <input
                    className={`m-4 bg-zinc-900 rounded-md text-gray-300 p-1 px-3 w-5/6 transition-all duration-500 ${pModifier}`}
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    minLength={1}
                    onChange={e => {setPassword(e.target.value || ''); setPModifier('')}}
                />

                <button type="submit" className="m-4 bg-zinc-900 rounded-md text-gray-300 text-center p-1 w-1/2 hover:bg-icon duration-300 transition ease-in-out">Login</button>
            </form>
        </div>
    )
}