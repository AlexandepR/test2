

export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number,
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovermentBuildings = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovermentBuildings>
    citizensNumber: number
}


export function demolishHousesOnTheStreet (city:CityType, street:string) {
    city.houses = city.houses.filter( h => h.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreaterThen(house: Array<GovermentBuildings>, num: number) {
    return house.filter( h => h.staffCount > num)
}




























































