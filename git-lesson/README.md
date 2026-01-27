\# Git Demo



This is my first Git \& GitHub demo project.

this change is for a PR demo. 

LESSON JS

// Отримуємо елементи з HTML за id
const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1'); 
const input2 = document.getElementById('input2'); 
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus'); 
const minusBtn = document.getElementById('minus');

// Змінна, яка зберігає поточну дію (+ або -)
let action = '+';

// Початковий підрахунок (якщо в input вже є значення)
const sum = Number(input1.value) + Number(input2.value);
resultElement.textContent = sum;

// При кліку на кнопку "+" змінюємо дію на додавання
plusBtn.onclick = function() {
  action = '+';
}

// При кліку на кнопку "-" змінюємо дію на віднімання
minusBtn.onclick = function() {
  action = '-';
}

// Функція для виведення результату на сторінку
// Якщо результат відʼємний — текст червоний
// Якщо додатній або 0 — зелений
function printResult(result) {
  if (result < 0) {
    resultElement.style.color = 'red';
  } else {
    resultElement.style.color = 'green';
  }
  resultElement.textContent = result;
}

// Функція, яка виконує обчислення залежно від дії
function computeNumbersWithAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (actionSymbol == '+') {
    return num1 + num2;
  }

  if (actionSymbol == '-') {
    return num1 - num2;
  }

  // Альтернатива через тернарний оператор:
  // return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

// При кліку на кнопку "submit"
submitBtn.onclick = function() {
  // Обчислюємо результат
  const result = computeNumbersWithAction(input1, input2, action);
  
  // Виводимо результат на сторінку
  printResult(result);
}
