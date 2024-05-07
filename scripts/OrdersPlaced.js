export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders")
    const orders = fetchResponse.json()

    
    let ordersHTML = orders.map(
        (order) => {
            return `<div>${order.id}</div>`
        }
    )
    ordersHTML.join("")
    return ordersHTML
}


// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()

//     document.addEventListener("change", handleSizeChange)

//     let sizesHTML = ''

//     //use map() to generate new array of strings
//     const divStringArray = sizes.map((size) => {
//         return `<div>
//             <input type ='radio' name='size' value='${size.id}' /> ${size.carats}
//             </div>`
//         }
//     )
// //this fcn needs to return a single string, not an array of strings
//     sizesHTML += divStringArray.join("")

//     return sizesHTML
// }