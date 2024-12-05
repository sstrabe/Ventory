import { NextRequest, NextResponse } from "next/server";
import { auth } from "./firebase/firebase";

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const user = auth.currentUser

    if (pathname.startsWith("/_next") || pathname.includes('.')) return NextResponse.next();

    if (!pathname.startsWith('/auth/') && !user) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    } else if(user && pathname.startsWith('/auth/')) {
        return NextResponse.redirect(new URL('/', req.url))
    }

    // if (req.nextUrl.pathname && req.nextUrl.pathname.startsWith('auth')) {
    //     if (user) {
    //         return NextResponse.redirect(new URL('/', req.url))
    //     }

    //     return
    // }

    return NextResponse.next()
}