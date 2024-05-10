// export const MetalOptions = async () => {
//     const response = await fetch("http://localhost:8088/metals")
//     const metals = await response.json()

//     let metalsHTML=''
//     for (const metal of metals) {
//         metalsHTML += `<div><input type ='radio' name='metal' value='${metal.id}' /> ${metal.metal}</div>`
//     }

//     return metalsHTML;
// }

import { setMetal } from "./TransientState.js"

let selectedMetal = 0;

const handleMetalChange = (changeEvent) => {
    if(changeEvent.target.name === 'metal') {
        setMetal(parseInt(changeEvent.target.value))

        selectedMetal = parseInt(changeEvent.target.value)

        const customEvent = new CustomEvent("metalChanged")
        document.dispatchEvent(customEvent)
        console.log("State Change HTML regenerating...")
    }
};

export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalsHTML = '';

    //use map() to generate new array of strings
    const divStringArray = metals.map((metal) => {

        if (parseInt(metal.id) === selectedMetal) {
            return `<div>
            <input type ='radio' name='metal' value='${metal.id}' checked /> ${metal.metal}
            </div>`
        } else {
          return `<div>
            <input type ='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
        } 
        }
    )
//this fcn needs to return a single string, not an array of strings
    metalsHTML += divStringArray.join("")

    return metalsHTML;
};