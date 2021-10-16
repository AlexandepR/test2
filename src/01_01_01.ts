const ages = [18, 20, 22, 1, 100, 90, 14];

const predicate = (age:number) => {
    return age > 90
}

const oldAges = [100]

type Tip = {
    title: string
    price: number
}

const arr = [
    {title: 'Hi', price: 110},
    {title: 'Hdd', price: 200},
    {title: 'Hsaaaaa', price: 150}
]

const smotr = (arr: Tip) => {
    return arr.price < 160
}