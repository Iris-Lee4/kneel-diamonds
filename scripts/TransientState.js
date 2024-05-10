//store transient state
// const transientState = {
//     "metalId": '',
//     "sizeId":  0,
//     "styleId": '',
//     "jewelryTypeId": 0
// }

// use map data structure instead of object

const transientState = new Map();
    transientState.set("metalId", 0);
    transientState.set("sizeId", 0);
    transientState.set("styleId", 0);
    transientState.set("jewelryTypeId", 0);

//setter functions for each property's value and export 
export const setMetal = (chosenMetal) => {
    // transientState.metalId = chosenMetal
    transientState.set("metalId", chosenMetal);
    console.log(transientState);
};

export const setSize = (chosenSize) => {
    // transientState.sizeId = chosenSize
    transientState.set("sizeId", chosenSize);
    console.log(transientState);
}

export const setStyle = (chosenStyle) => {
    // transientState.styleId = chosenStyle
    transientState.set("styleId", chosenStyle);
    console.log(transientState);
};

export const setJewelryType = (chosenJewelryType) => {
    // transientState.jewelryTypeId = chosenJewelryType
    transientState.set("jewelryTypeId", chosenJewelryType);
    console.log(transientState);
};

export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */

    const transientStateObj = Object.fromEntries(transientState);

    const postOptions = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(transientStateObj)
    };
    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);

    const customEvent = new CustomEvent("newOrderCreated");
    document.dispatchEvent(customEvent);
};