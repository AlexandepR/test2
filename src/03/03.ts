
import {CityType, GovermentBuildings, HouseType} from "../02/02_02";
import {StudentType} from "../02/02";

export const sum = (a:number, b:number) => {
    return a+b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id:new Date().getTime(),
    title: skill
    })
}

export const addSkill2 = (student: StudentType, skill: string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s:StudentType) {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovermentBuildings, budget: number) => {
building.budget += budget;
}

export const repairHouse = (houseType: HouseType) => {
    houseType.repaired = true;
}
export const toFireStaff = (building: GovermentBuildings, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovermentBuildings, staffCountToHire: number) => {
    building.staffCount += staffCountToHire;
}