import { NextRequest, NextResponse } from "next/server";
import db from "./DatabaseService"

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

export async function middleware(req: NextRequest) {
    const isLoggedIn = await db.isAuthenticated(req.cookies as any)
    if (req.nextUrl.pathname && req.nextUrl.pathname.startsWith('/auth')) {
        if (isLoggedIn) {
            return NextResponse.redirect(new URL('/dash', req.url))
        }
        return
    }

    if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    if (req.nextUrl.pathname === '/') return NextResponse.redirect(new URL('/dash', req.url))

    return NextResponse.next()
}