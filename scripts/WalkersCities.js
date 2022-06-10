import { getWalkerCities } from "./database.js"
import { getCities } from "./database.js"

const walkerCities = getWalkerCities()
const cities = getCities()

// export var func    
export const filterCitiesForWalkers = (walker) => {
    const assignments = []
    //check if walker.id is in walkercity.walkerid
    for (const city  of walkerCities) {
        if(city.walkerId === walker.id)
        assignments.push(city)
    }
    return assignments
}

export const filteredCities = (assignments) => {
    let cityForWalker = ""

    for (const assignment of assignments ) {
        for (const city of cities) {
            if(city.id === assignment.cityId ) {
                cityForWalker += `-${city.name}`    
            }
        }cityForWalker += `-`
    } 
    return cityForWalker
}
    
    //if true add city.id for walker
    
    //walker.cityId === city.Id add city.name



