//import both getPets() and getWalkers() from database.js
import { getPets, getWalkers } from "./database.js"

// set each func to var 
const pets = getPets()
const walkers = getWalkers()


// Function whose responsibility is to find the walker assigned to a pet
//new func to take para pet and allWalker
const findWalker = (pet, allWalker) => {
    //let var pet Walker to null
    let petWalker = null
// iterate through walkers
    for (const walker of walkers) {
        // if walker.id is = to pet.walker.id
        if (walker.id === pet.walkerId) {
            // set petWalker value to walker
            petWalker = walker
        }
    }
// return petwalker
    return petWalker
}

// export new assignment func
export const Assignments = () => {
    // new var equal to empty string
    let assignmentHTML = ""
    // set value for var to be wrapped w" <ul>"
    assignmentHTML = "<ul>"
// iterate pets
    for (const currentPet of pets) {
        // new var to hold the result of running findWalker w given arguments
        const currentPetWalker = findWalker(currentPet, walkers)
        //add to var interpolated string  w currentPetWalker info 
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPet.city}
            </li>
        `
    }
// complete string with endng </ul> wrap
    assignmentHTML += "</ul>"
//return completed string 
    return assignmentHTML
}

