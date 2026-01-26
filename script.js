let num = 42;
let firstName = 'Natalia';
const isProgrammer = true;

/*Can Do
let $ = 'test';
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 42;
let num_ = 42;
let first_name = 'Elena'//bad
let myName = 'Nata'//good
*/
 
// Restricted
//let 42Num = '11'
//let my-num = 1
//let const 

//firstName = 'Nata';
//isProgrammer = false //error because of const

//alert(firstName)

//console.log(firstName, num);

/*console.log(num + 10);
console.log(num - 10);
console.log(num * 10);
console.log(num / 10);
*/

/*let num2 = num + 10;
console.log(num, num2);
num = num2 - num;
num2 = num2 + 1;
console.log(num, num2)
*/

/*let num3 = num + 10 * 2 / 5 - 1;
console.log(num3);
*/

/*const fullName = firstName + ' Ilchenko';
console.log(fullName);*/

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1'); 
const input2 = document.getElementById('input2'); 
const submitBtn = document.getElementById('submit');

//console.log(resultElement.textContent);
//resultElement.textContent = 42;

const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
//console.log(typeof sum);

submitBtn.onclick = function() {
   // console.log('Hello Click' )
   const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;
}

