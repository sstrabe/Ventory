'use client';

import { useState } from "react";
import PocketBase from "pocketbase"

export default function CreateItem() {
    const [name, setName] = useState('')

    const create = async () => {
        const db = new PocketBase('http://127.0.0.1:8090');

        console.log(name)
        await db.collection('items').create({
            name
        })
    }

    return (
        <form onSubmit={create}>
            <h3>Add a new item</h3>
            <input
                type="text"
                placeholder="Text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">
                Create item
            </button>
        </form>
    )
}