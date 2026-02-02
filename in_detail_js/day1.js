// Практика : 5 змінних різних типів 
/*
const year = 2026
const city = 'Prague'
const inStudent = true
let price
const selectedProduct = null

console.log(year, typeof year)
console.log(city, typeof city)
console.log(inStudent, typeof inStudent)
console.log(price, typeof price)
console.log(selectedProduct, typeof selectedProduct)
*/
/*
const userAge = 19
const money = 120

if (userAge >=18 && money >=100 ) {
    console.log('ok')
} else {
    console.log('Closed')
}*/

//Цикли
/*
for( let i = 0; i <= 5; i++){
    console.log(i)
}*/
/*
let i = 5

while(i <= 10){
    console.log(i)
    i++
}*/

//Таблиця множення
/*
for(let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5*i}`)
}*/

// Цикл у сумі
let sum = 0

for(let i = 1; i <= 10; i++){
    sum = sum + i
    console.log('i = ', i, 'sum = ', sum)
}

console.log('final sum', sum)