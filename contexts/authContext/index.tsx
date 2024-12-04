import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContext {
    currentUser: User | null
    userLoggedIn: boolean
    loading: boolean
}

const AuthContext = createContext<AuthContext | null>(null);

export function useAuth() {
    return useContext(AuthContext) as AuthContext
}

export default function({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User|null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initUser);
        return unsubscribe
    }, [])

    async function initUser(user: User | null) {
        if (user) {
            setCurrentUser(user)
            setUserLoggedIn(true)
        } else {
            setCurrentUser(null)
            setUserLoggedIn(false)
        }
        setLoading(false)
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}