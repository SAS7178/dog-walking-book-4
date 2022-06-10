import { filterCitiesForWalkers } from "./WalkersCities.js"
import { filteredCities } from "./WalkersCities.js";
import { getWalkers } from "./database.js"

// set getWAlkers() to var
const walkers = getWalkers()
//const walkersCities = filterCitiesForWalkers(walkers)
//const cityFilter = filteredCities(walkersCities)
//addeventlistener-call back func w click, and func as para 
document.addEventListener("click",(clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterCitiesForWalkers(walker)
                    const cities = filteredCities(assignments)

                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    })
//export new Walker func 
export const Walkers = () => {
    //create let var  
    let walkerHTML = "<ul>"
    // iterate through walkers
    for (const walker of walkers) {
        // add walker.name in HTML list <li>${walker.name}</li>
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    // add </ul> at the end of the string of strings
    walkerHTML += "</ul>"
    //return entire HTML string 
    return walkerHTML;
}

