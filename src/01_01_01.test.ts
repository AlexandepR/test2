
test('should take old men older then 90', ()=> {
    const ages = [18, 20, 22, 1, 100, 90, 14];

    // const predicate = (age:number) => {
    //     return age > 90
    // }
    // const oldAges = ages.filter(predicate);

    const oldAges = ages.filter((age:number) => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);


})

test('sh', () => {
    const arr = [
        {title: 'Hi', price: 110},
        {title: 'Hdd', price: 200},
        {title: 'Hsaaaaa', price: 150}
    ]

   const arrFunc = (ob: Tip) => {
        return ob.price > 100
   }

   const arrD = arr.filter( (ob:Tip) => ob.price > 100 )

})

test ('should be false', () => {
    const arr2 = [
        {id: 1, name: "brade", isDone: false},
        {id: 1, name: "milk", isDone: true}
    ]

    const newBuy = arr2.filter((buyNo) => buyNo.isDone === false)

    expect(newBuy[0].isDone).toBe(false)
})

