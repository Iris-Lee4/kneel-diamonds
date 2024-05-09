export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size&_expand=jewelryType")
    const orders = await fetchResponse.json()

    let ordersHTML = ''
    const ordersString = orders.map(
        (order) => {
            const orderPrice = (order.metal.price + order.style.price + order.size.price) * order.jewelryType.priceModifier
            const orderPriceFormatted = orderPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<div>Order #${order.id} costs $${orderPriceFormatted}</div>`
        }
    )
    ordersHTML += ordersString.join("")
    return ordersHTML
}