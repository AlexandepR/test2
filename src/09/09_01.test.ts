function icreaseAge(u: UserType) {
    u.age++;
}

type UserType = {
    name: string
    age: number
}

test('big test', () => {

    let user = [{
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        }]

   let admins = user

    admins.push({name: 'Bandyugan', age: 10})

    expect(user[2]).toEqual({name: 'Bandyugan', age: 10})
})


// test ('sort letters test', () => {
//
//     const letters = ['c', 'd', 'a', 'z', 'e']
//
//     passportist(letters)
//
//     expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])
//
// })
//
// function passportist(letters:any) {
//     letters.sort();
// }

test ('sort letters test', () => {

    const letters = ['c', 'd', 'a', 'z', 'e']

    passportist(letters)

    expect(letters).toEqual(['c', 'd', 'a', 'z', 'e'])

})

function passportist(letters:any) {
    const copy = [...letters].sort();
    console.log(copy);
}





// test ('big test', () => {
//
//     let user = {
//         name: 'Dimych',
//         age: 32
//     }
//
// icreaseAge(user)
//
//     expect(user.age).toBe( 33)
//
//     const superman = user
//
//     superman.age = 1000
//     expect(user.age).toBe( 1000)
// })