// export const StyleOptions = async () => {
//     const response = await fetch("http://localhost:8088/styles")
//     const styles = await response.json()

//     let stylesHTML=''
//     for (const style of styles) {
//         stylesHTML += `<input type ='radio' name='style' value='${style.id}' /> ${style.style}`
//     }

//     return stylesHTML;
// }

import { setStyle } from "./TransientState.js"

const handleStyleChange = (changeEvent) => {
    if(changeEvent.target.name === 'style') {
        setStyle(parseInt(changeEvent.target.value))
    }
}


export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    document.addEventListener("change", handleStyleChange)

    let stylesHTML = ''

    //use map() to generate new array of strings
    const divStringArray = styles.map((style) => {
        return `<div>
            <input type ='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )
//this fcn needs to return a single string, not an array of strings
    stylesHTML += divStringArray.join("")

    return stylesHTML
}