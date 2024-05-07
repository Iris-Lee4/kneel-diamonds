import { placeOrder } from "./TransientState.js"

const handlePlaceOrder = (clickEvent) => {
    if (clickEvent.target.id === 'placeOrder') {
        placeOrder();
    }
}

export const placeOrderButton = () => {

    document.addEventListener("click", handlePlaceOrder)

    return "<div><button id='placeOrder'>Place Order</button></div>"
}