import { setJewelryType } from "./TransientState.js"

const handleJewelryTypeChange = (changeEvent) => {
    if(changeEvent.target.name === 'jewelryType') {
        setJewelryType(parseInt(changeEvent.target.value));
    };
};

export const JewelryOptions = async () => {
    const response = await fetch("http://localhost:8088/jewelryTypes");
    const jewelryType = await response.json();

    document.addEventListener("change", handleJewelryTypeChange);

    let jewelryTypeHTML = ''

    //use map() to generate new array of strings
    const divStringArray = jewelryType.map((jewelry) => {
        return `<div>
            <input type ='radio' name='jewelryType' value='${jewelry.id}' /> ${jewelry.type}
            </div>`
        }
    )
//this fcn needs to return a single string, not an array of strings
    jewelryTypeHTML += divStringArray.join("");

    return jewelryTypeHTML;
};