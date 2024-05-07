//store transient state
const transientState = {
    "metal": '',
    "size":  0,
    "style": ''
}

//setter functions for each property's value and export 
export const setMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
    console.log(transientState)
}

export const setSize = (chosenSize) => {
    transientState.size = chosenSize
    console.log(transientState)
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
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