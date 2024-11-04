import Link from "next/link";
import PocketBase from 'pocketbase'
import CreateItem from "./create";

export const dynamic = 'auto',
    dynamicParams = true,
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto'


async function getItems() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const data = await db.collection('items').getList(1, 10)

    return data?.items as unknown[];
}

export default async function ItemsPage() {
    const items = await getItems()

    return (
        <div>
            <h1>Items</h1>
            <div>
                {items?.map((item) => {
                    //@ts-expect-error because I fvcking hate my life
                    return <Item key={item.id} item={item}/>
                })}
            </div>

            <CreateItem/>
        </div>
    )
}

interface item {
    name: string,
    id: string
}

function Item({ item }: { item: item }) {
    const { id, name } = item || {};

    return (
        <Link href={`/items/${id}`}>
            <h2>{name}</h2>
        </Link>
    )
}