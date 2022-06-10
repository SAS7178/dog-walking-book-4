// import getPets() from database
import { getPets } from "./database.js"
//set func to var
const pets = getPets()

// export new func RegisteredPets
export const RegisteredPets = () => {
    //var to hold string created wrapped in "<ul>"
    let petHTML = "<ul>"
// iterate through pets
    for (const pet of pets) {
        //add interpolated pet.name wrapped between <li></li>
        petHTML += `<li>${pet.name}</li>`
    }
// add </ul> to the end of the string of names list
    petHTML += "</ul>"
//return the completed string
    return petHTML
}

