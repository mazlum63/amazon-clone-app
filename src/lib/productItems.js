export async function getAllItems() {
    const res = await fetch('https://fakestoreapi.com/products')
    const items = await res.json()
    return items
}