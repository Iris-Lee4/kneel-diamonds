export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

    let ordersHTML = ''
    const ordersString = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div>Order #${order.id} cost $${orderPrice}</div>`
        }
    )
    ordersHTML += ordersString.join("")
    return ordersHTML
}