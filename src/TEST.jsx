import React from "react";

// <script>

let Promise = new Promise((resolve, reject) => {
    resolve()

});

promise
    .then((message) => {
})


// </script>
const testAlert = () => {
    return resolve
}


let myPromise = new Promise((resolve, reject) => {
    alert('Hello')
})

myPromise
    .then( (testAlert) => {

    })

let pr = new Promise ( (resolve, reject) => {
    let data = {
        cities: [{title: 'Minsk'}, {title: 'Kiev'}],
        website: 'it-kamasutra.com'
    }
    resolve(data)
});

pr
    .then(data => {
    console.log(data)
})
.then(website => {
    console.log(website)
})

let promise = new Promise ( (res, rej) => {
    return res
})

Promise.all(Promise.resolve(3), Promise.resolve(5))