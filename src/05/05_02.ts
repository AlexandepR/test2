import {GovermentBuildings, HouseType} from "../02/02_02";


export const getStreetsTitlesOfGOvernmentsBuildings =
    (buildings: Array<GovermentBuildings>) => {
    return buildings.map(b => b.address.street.title)
}

export const  getStreetsTitleOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(b => b.address.street.title)
    }

export const createMessages = (houses: Array<HouseType>) => {

    return houses.map(h => `Hello guys from ${h.address.street.title}`)
    }
