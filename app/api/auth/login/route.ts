import db from "@/DatabaseService";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { username, password } = await req.json()
        const res = await db.authenticate(username, password)
        if (!res) return new Response(
            JSON.stringify({ error: 'Invalid credentials' }),
            {
                status: 403,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )

        const { record, token } = res

        record.token = token;
        (await cookies()).set('pb_auth', db.client.authStore.exportToCookie())

        return NextResponse.json(record)
    } catch(e) {
        return new Response(
            JSON.stringify({ error: e }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
    }
}