'use client'

import { ReactNode } from "react";
import AuthProvider from "@/contexts/authContext";
import './globals.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html>
            
            <body>
                <AuthProvider>
                    { children }
                </AuthProvider>
            </body>
        </html>
    )
}