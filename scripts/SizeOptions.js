// export const SizeOptions = async () => {
//     const response = await fetch("http://localhost:8088/sizes")
//     const sizes = await response.json()

//     let sizesHTML=''
//     for (const size of sizes) {
//         sizesHTML += `<input type ='radio' name='size' value='${size.id}' /> ${size.carats}`
//     }

//     return sizesHTML;
// }

import { setSize } from "./TransientState.js"

let selectedSize = 0;

const handleSizeChange = (changeEvent) => {
    if(changeEvent.target.name === 'size') {
        setSize(parseInt(changeEvent.target.value));

        selectedSize = parseInt(changeEvent.target.value);

        const customEvent = new CustomEvent("sizeChanged");
        document.dispatchEvent(customEvent);
        console.log("State Change HTML regenerating...");

    }
};


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes");
    const sizes = await response.json();

    document.addEventListener("change", handleSizeChange);

    let sizesHTML = ''

    //use map() to generate new array of strings
    const divStringArray = sizes.map((size) => {
        return `<div>
            <input type ='radio' name='size' value='${size.id}' ${selectedSize === parseInt(size.id) ? 'checked' : ""}/> ${size.carats}
            </div>`
        }
    );
//this fcn needs to return a single string, not an array of strings
    sizesHTML += divStringArray.join("");

    return sizesHTML;
};