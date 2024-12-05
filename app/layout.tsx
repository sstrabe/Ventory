'use client'

import { ReactNode } from "react";
import AuthProvider from "@/contexts/authContext";
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            
            <body>
                <div className="bg-background bg-center bg-cover fixed bg-triangles w-[100vw] h-[100vh] m-0"><div className="bg-background opacity-50 w-full h-full"></div></div>
                <AuthProvider>
                    { children }
                </AuthProvider>
            </body>
        </html>
    )
}
