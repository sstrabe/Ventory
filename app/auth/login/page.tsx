import { Metadata } from "next"
import Login from "./login"
import { CookiesProvider } from "next-client-cookies/server"

export const metadata: Metadata = {
    title: "Ventory | Login"
}

export default function Page() {
    return (
        <div className="grid h-[100vh] w-[100vw]">
            <CookiesProvider>
                <Login></Login>
            </CookiesProvider>
        </div>
    )
}