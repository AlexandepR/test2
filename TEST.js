
let state = {
    name: 'Alex',
    age: 3,
    address: {
        street: 'one',
        city: {
            one: [{}, {}, {}],
            two: 'grodno',
            three: {
                name: 'Alex'
            }
        }
    }
}
const stateCopyTwo = {
    ...state,
    address: {
        ...state.address,
        city: {
            ...state.address.city,
            one : {...state.address.city.one.map(el => ({...el})),
                three: {
                ...state.address.city.three
            }
            }
        }
    }
}




let a = [{name: 'D', a: {}}, {name: 'M'}];

const copyA = a.map(el => {
    return {
        ...el,
        a: {...el.a}
    }
})


let state = {
    name: 'Alex',
    age: 3,
    address: {
        street: 'one',
        city: {
            one: 'minsk',
            two: 'grodno'
        }
    }
}

let copyState = {
    ...state,
    address: {
        ...state.address,
        city: {
            ...state.address.city
        }
    }
}
