import {
    UserType,
    UserWithBooksType,
    makeHairstyle,
    userWithLaptopType,
    moveUser,
    upgradeUserLaptop,
    LaptopType,
    moveUserToOtherhouse,
    addNewBooksToUser,
    updateBook,
    UserMyType,
    CityMy,
    BooksLaptopMyType,
    changeMinskToKiev,
    changeAsusToMacbook,
    changeHouses,
    newElement,
    changeBook,
    removeBook,
    CompanyType,
    updateCompanyTitle,
    updateCompanyTitle2
} from "./10_01";


// function makeHairstyle(u: UserType, power:number) {
//     const copy = {
//         ...u,
//         hair: u.hair / power
//     }
//     // copy.hair = u.hair / power
//
//     return copy
// }


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
          }
    }
    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', () => {
    let user: userWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')

})

test('upgrade laptopl to macbook', () => {
    let user: userWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }
    const userCopy = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')

})

test('upgrade laptopl to macbook', () => {
    let user: userWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherhouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: userWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    // expect(userCopy.books[5]).toBe('rest api')
})

test('add new books to user', () => {
    let user: userWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    // expect(userCopy.books[5]).toBe('rest api')
})

test('changed books js on ts', () => {
    let user: userWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user,'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})



 const UserMy: UserMyType & BooksLaptopMyType = {
    name: 'Alex',
     age: 35,
     address: {
         city: 'Minsk',
         house: 12
     },
     laptop: {
       title: 'Asus'
     },
     books: ['react', 'html', 'js']
}

test ('should sity Minsk change to Kiev', () => {

        const UserMy: UserMyType & BooksLaptopMyType = {
            name: 'Alex',
            age: 35,
            address: {
                city: 'Minsk',
                house: 12
            },
            laptop: {
                title: 'Asus'
            },
            books: ['react', 'html', 'js']
        }

   const CopyUserMy =  changeMinskToKiev( UserMy, 'Kiev')

expect(CopyUserMy.address.city).toBe('Kiev')
    }
)

test ( 'should change asus on macbook', () => {
    const UserMy: UserMyType & BooksLaptopMyType = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['react', 'html', 'js']
    }

    const copyUserMy = changeAsusToMacbook(UserMy, 'Macbook')

    expect(copyUserMy.laptop.title).toBe('Macbook')
    })


test ('should houses change 12 to 99',  () => {
    const UserMy: UserMyType & BooksLaptopMyType = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['react', 'html', 'js']
    }

    const copyUserMy = changeHouses (UserMy, 99)

 expect(copyUserMy.address.house).toBe(99)

})


test('should add new element', ()=> {
    const UserMy: UserMyType & BooksLaptopMyType  = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['react', 'html', 'js']
    }

    const copyUserMy = newElement (UserMy, 'SUPER')

    expect(copyUserMy.books[3]).toBe('SUPER')
})



test('change', () => {
    const UserMy: UserMyType & BooksLaptopMyType  = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['react', 'html', 'js']
    }

    const copyUserMy = changeBook (UserMy, 'CHANGE', 'js')

    expect(copyUserMy.books[2]).toBe('CHANGE')
})

test('remove html book', () => {
    const UserMy: UserMyType & BooksLaptopMyType  = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Asus'
        },
        books: ['react', 'html', 'js']
    }

    const copyUserMy = removeBook (UserMy, 'html')

    expect(copyUserMy.books[1]).toBe('js')
})





test('update company', () => {
    const user: UserMyType & CompanyType  = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        },
        companies: [{id:1, title: 'JS'}, {id:2, title: 'IT'}]
    }

    const copyUserMy = updateCompanyTitle (user,1, 'EPAM')

    expect(copyUserMy.companies[0].title).toBe('EPAM')
})


test('update company', () => {
    const user: UserMyType = {
        name: 'Alex',
        age: 35,
        address: {
            city: 'Minsk',
            house: 12
        }
    }
let companies = {
        'Dimych': [{id:1, title: 'JS'}, {id:2, title: 'IT'}],
        'Artem': [{id:1, title: 'INCUBATOR'}]
}

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'JS')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych']).not.toBe(['JS'])


    // let companyCopy = {...companies}
    //
    //
    // const copyUserMy = updateCompanyTitle (user,1, 'EPAM')
    //
    // expect(copyUserMy.companies[0].title).toBe('EPAM')
})
























