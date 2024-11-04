import db from "@/DatabaseService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const isLoggedIn = await db.isAuthenticated(req.cookies)
    if (isLoggedIn) {
        (await cookies()).set('pb_auth', '')
        db.logout(req.cookies)
    }

    return NextResponse.redirect(new URL('/auth/login', req.url))
}