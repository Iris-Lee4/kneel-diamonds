import { MetalOptions } from "./MetalOptions.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";
import { placeOrderButton } from "./PlaceOrders.js";
import { Orders } from "./OrdersPlaced.js";
import { JewelryOptions } from "./JewelryType.js";

const container = document.querySelector('#container');

const render = async () => {
    const metalOptionsHTML = await MetalOptions();
    const sizeOptionsHTML = await SizeOptions();
    const styleOptionsHTML = await StyleOptions();
    const orderHTML = await placeOrderButton();
    const ordersPlacedHTML = await Orders();
    const jewelryTypeHTML = await JewelryOptions();

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>
        
        <article class="jewelry_type">
            ${jewelryTypeHTML}
        </article>
        
        <article class="order">
            ${orderHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${ordersPlacedHTML}
        </article>
    `

    container.innerHTML = composedHTML
};

document.addEventListener("newOrderCreated", render);
document.addEventListener("metalChanged", render);
document.addEventListener("sizeChanged", render);
document.addEventListener("styleChanged", render);


render();