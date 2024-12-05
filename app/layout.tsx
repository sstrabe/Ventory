'use client'

import { ReactNode } from "react";
import AuthProvider from "@/contexts/authContext";
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            
            <body className="bg-background bg-center bg-cover fixed bg-triangles filter brightness-50">
                <AuthProvider>
                    { children }
                </AuthProvider>
            </body>
        </html>
    )
}
