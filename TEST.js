// import axios, {AxiosResponse} from "axios";
// import {NewProfileType} from "../Redux/profileReducer";






















var user = {
    name: 'Alex',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}
console.log(user.address.city.title)
console.log(user['address']['city']['title'])

let city = {}
city.title = 'Grodno'
console.log(city)
console.log(city.title)

let users = ['Alex', 'Kate', 'Mike']
console.log(users[0])

console.log(user['name'] + '--- 0 user')

let usersObj = {
    '0' : 'A',
    '1' : 'B',
    '2' : 'C'
}

console.log(users[1] + 'usersObj ')
console.log(Object.values(usersObj) + '  Object.keys ')
console.log(Object.keys(usersObj) + '  Object.keys ')

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers: {
//         'API-KEY': 'fae6bcdf-1b7b-4b5f-8f9c-eecd7cb26aa8',
//     }
// })


// export const usersAPI = {
//
//     getUsers(currentPage: number, pageSize: number)  {
//
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(responce => responce.data)
//     },
//     follow(userId:number){
//         return instance.post(`follow/${userId}`, {}
//         )
//     },
//     unFollow(userId:number){
//         return instance.delete(`follow/${userId}`)
//     }
// }
//
// export const AuthMeAPI = {
//     getAuth() {
//         return instance.get(`auth/me`);
//     },
//
//     loginIn(email:string,password:string, rememberMe:boolean,captcha:string){
//         return instance.post(`auth/login`, {email,password,rememberMe,captcha});
//     },
//     loginOut(){
//
//         return instance.delete(`auth/login`,)
//     },
//     getCaptcha(){
//         return instance.get(`/security/get-captcha-url`)
//     }
// }


//
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
//
//
//
//
// let a = [{name: 'D', a: {}}, {name: 'M'}];
//
// const copyA = a.map(el => {
//     return {
//         ...el,
//         a: {...el.a}
//     }
// })
//
//
// let state = {
//     name: 'Alex',
//     age: 3,
//     address: {
//         street: 'one',
//         city: {
//             one: 'minsk',
//             two: 'grodno'
//         }
//     }
// }
//
// let copyState = {
//     ...state,
//     address: {
//         ...state.address,
//         city: {
//             ...state.address.city
//         }
//     }
// }
