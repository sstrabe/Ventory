import PocketBase from 'pocketbase'

async function getItem(id: string) {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('items').getOne(id)

    return data
}

export default async function ItemPage({ params }: { params: Promise<unknown> }) {
    //@ts-expect-error because I fvcking hate my life
    const item = await getItem((await params).id)

    return (
        <div>
            <h1>Items</h1>
            <div>
                <h3>{item.name}</h3>
            </div>
        </div>
    )
}