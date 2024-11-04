import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import PocketBase from "pocketbase"

export const PocketBaseURL = "http://127.0.0.1:8090"

export class DatabaseClient {
    client: PocketBase

    constructor() {
        this.client = new PocketBase(PocketBaseURL)
    }

    async authenticate(username: string, password: string) {
        try {
            const result = await this.client.collection('users').authWithPassword(username, password)

            if (!result?.token) throw new Error('Invalid username or password')

            return result;
        } catch(e) {
            return null
        }
    }

    async register(username: string, password: string) {
        try {
            const result = await this.client.collection('users').create({
                username,
                password,
                passwordConfirm: password
            })

            return result
        } catch(e) { console.error(e) }
    }

    async isAuthenticated(cookieStore: RequestCookies) {
        const cookie = cookieStore.get('pb_auth')
        if (!cookie) return false
        
        this.client.authStore.loadFromCookie(cookie.value)
        return this.client.authStore.isValid || false
    }

    async getUser(cookieStore: ReadonlyRequestCookies) {
        const cookie = cookieStore.get('pb_auth')
        if (!cookie) return false

        this.client.authStore.loadFromCookie(cookie.value)
        return this.client.authStore.model
    }

    async logout(cookieStore: RequestCookies) {
        const cookie = cookieStore.get('pb_auth')
        if (!cookie) return

        this.client.authStore.loadFromCookie(cookie.value)
        this.client.authStore.clear()
    }
}

export const db = new DatabaseClient()
export default db