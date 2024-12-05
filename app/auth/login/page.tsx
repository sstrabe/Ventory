import { Metadata } from "next"
import Login from "./login"

export const metadata: Metadata = {
    title: "Ventory | Login"
}

export default function Page() {
    return (
        <div className="grid h-[100vh] w-[100vw]">
            <Login></Login>
        </div>
    )
}