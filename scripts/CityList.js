//import getcities() from database.js
import { getCities } from "./database.js";
//set to cities var
const cities = getCities()

//export new func CityList 
export const CityList = () => {
    // let citiesHTML to hold city string info wrapped in <ul>''</ul>  
    let citiesHTML = "<ul>"
    //iterate through cities 
    for (const city of cities) {
        // add each city.name to my citiesHTML string wrapped between <li>""</li>
        citiesHTML += `<li>${city.name}</li>`
    }
    //complete wrap of my new string with ending </ul>
    citiesHTML += "</ul>"
    //return entire string
    return citiesHTML
}

