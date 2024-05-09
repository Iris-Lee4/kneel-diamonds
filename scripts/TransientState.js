//store transient state
const transientState = {
    "metalId": '',
    "sizeId":  0,
    "styleId": '',
    "jewelryTypeId": 0
}

//setter functions for each property's value and export 
export const setMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}

export const setJewelryType = (chosenJewelryType) => {
    transientState.jewelryTypeId = chosenJewelryType
    console.log(transientState)
}

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}