import {findAllByTitle} from "@testing-library/react";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type LaptopType = {
    title:string
}

export type userWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export function makeHairstyle(u: UserType, power:number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power

    return copy
}

export function moveUser(u:userWithLaptopType, city:string) {
    return {
            ...u,
            address: {
                ...u.address,
                city: city
            }
        }
    }

export function moveUserToOtherhouse(u:userWithLaptopType & UserWithBooksType, house:number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}


export function upgradeUserLaptop (u:userWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}


export function addNewBooksToUser(user:UserWithBooksType & userWithLaptopType, newBook: string){
    return {
        ...user,
        books: [
            ...user.books,
            newBook
        ]
    }

    // copy.books.push(newBook)

}

export function updateBook(user:UserWithBooksType & userWithLaptopType, before:string, after:string) {
    return {
        ...user,
        books : user.books.map(b => b === before ? after : b)
        // books : user.books.map(b => {
        //     if( b === before) {
        //         return after
        //     } else {
        //         return b
        //     }
        // })
    }
}


export type UserMyType = {
    name: string
    age: number
    address: CityMy
    // companies: CompanyType
}

type CompanyTypeNew = { id: number, title: string };
export type CompanyType = {
    companies: Array<CompanyTypeNew>
}



export type CityMy = {
    city: string
    house: number
}


export type BooksLaptopMyType = UserMyType & {
    laptop : {
        title: string
    }
    books: Array<string>
}

export function changeMinskToKiev(u: UserMyType & CompanyType , cityNew:string) {
    return {
        ...u,
        address: {
            ...u.address,
            city : cityNew}
    }
}


export const changeAsusToMacbook = (u:UserMyType & BooksLaptopMyType, model: string) => {
 return {
        ...u,
        laptop: {
            ...u.laptop,
            title: model
        }
 }
}


export const changeHouses = (u:UserMyType & BooksLaptopMyType, Newhouse: number) => {
    return {
        ...u,
        address: {
            ...u.address,
            house: Newhouse
        }
    }
}



export const newElement = ( user:UserMyType & BooksLaptopMyType,newBook:string ) => {
    return {
        ...user,
        books : [
            ...user.books,
            newBook
        ]
    }
}



export const changeBook = (u: UserMyType & BooksLaptopMyType, newBook:string, oldBook: string) => {
    return {
        ...u,
        books : u.books.map(b => b === oldBook ? newBook : b)
    //     books: u.books.map(b => {
    //             if (b === oldBook) {
    //                 return newBook
    //             } else {
    //                 return b
    //             }
    //         })
    }
}

export const removeBook = (u:UserMyType & BooksLaptopMyType, removeBook: string) => {
  return {
      ...u,
      books : u.books.filter(b => b !== removeBook)
  }
}





export const updateCompanyTitle = (user:CompanyType,comanyId: number, newTitle: string ) => {

    const copy: CompanyType ={
            ...user,
        companies: user.companies.map(c => c.id === comanyId ? {...c, title : newTitle} : c )
    }
    return copy
}

// export type CompanyType = {
//     companies: Array<{id: number, title: string}>
// }


export const updateCompanyTitle2 = (companies: {[key:string]: Array <CompanyTypeNew> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ?
        {...c, title: newTitle} : c)



    return companyCopy;
}

















