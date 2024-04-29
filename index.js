const people = [
  { name: "Владилен", age: 25, budget: 40000 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Игорь", age: 49, budget: 50000 },
  { name: "Михаил", age: 15, budget: 1000 },
  { name: "Василиса", age: 24, budget: 25000 },
  { name: "Виктория", age: 38, budget: 2300 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }

//ForEach

// people.forEach(function (person) {
//   console.log(person);
//   console.log(index);
//   console.log(pArr);
// });
people.forEach((person) => console.log(person));
//_____________________________________________________
//Map- для преобразования текущего массива в новый массив

const newPeople = people.map((person) => `${person.name} (${person.age})`);
const newPeople2 = people.map((person) => person.age * 3);
console.log(newPeople);
console.log(newPeople2);

//Filter
// const adults = [];

// for (let i = 0; i < people.length; i++) {
//   if (people[i].age >= 18) {
//     adults.push(people[i]);
//   }
// }

// console.log(adults); //список тех, кто старше 18
//_______________________________________________________________
const adults = people.filter((person) => {
  if (person.age >= 18) {
    return true;
  }
});
// сокращенный вариант(стрелочная функция)
const adults2 = people.filter((person) => person.age >= 18);

console.log(adults2);
// ____________________________________________________________
//Reduce
//_______________________
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
//   amount += people[i].budget;
// }
//________________________

// const amount = people.reduce((total, person) => {
//   return total + person.budget;
// }, 0);
const amount = people.reduce((total, person) => total + person.budget, 0);
console.log(amount); //121700
// ____________________________________________________________
//Find

const igor = people.find((person) => person.name === "Игорь");
console.log(igor); //{name: 'Игорь', age: 49, budget: 50000}

//FindIndex
const igorIndex = people.findIndex((person) => person.name === "Игорь");
console.log(igorIndex); //2

//==============================================

const newPeople_ = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name}  (${person.age})`,
      budget: person.budget,
    };
  });
console.log(newPeople_);
// ************************************************************
//Задачи (методы массивов) на codeWars
//*********************************************************

//Задача 5
/*Просто, учитывая строку слов, верните длину самого короткого слова (слов).

Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.*/
//________________________
// function findShort(s) {
//   let words = s.split(" ");
//   let minLength = words[0].length;
//   console.log(words);
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < minLength) {
//       minLength = words[i].length;
//     }
//   }
//   return minLength;
// }
//_____________________________________
function findShort(s) {
  const words = s.split(" "); // разделяем строку на слова
  const sortedWords = words.sort((a, b) => a.length - b.length); // сортируем слова по длине
  return sortedWords[0].length; // возвращаем длину самого короткого слова
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3);
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
); // 3);
console.log(findShort("Let's travel abroad shall we")); // 2);

//******************************************************* */
//Задача 6
/*Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.

Например, если мы пропустим через функцию 9119, получится 811181, потому что 9 2 равно 81, а 1 2 равно 1. (81-1-1-81)

Пример №2: Ввод 765 вернет/должен вернуть 493625, потому что 7 2 равно 49, 6 2 равно 36, а 5 2 равно 25. (49-36-25)

Примечание. Функция принимает целое число и возвращает целое число.*/

function squareDigits(num) {
  let arrOfNum = Array.from(String(num), Number);
  let squareDigits = arrOfNum.map(function (digit) {
    return digit ** 2;
  });
  return Number(squareDigits.join(""));
}

console.log(squareDigits(3212)); //, 9414

console.log(squareDigits(2112)); //, 4114

console.log(squareDigits(0)); // 0

//второй вариант
// function squareDigits(num){
//     return +num.toString().split('').map(i => i*i).join('');
//   }
//   ____________________________

//Задача 7
/*Напишите функцию processArray, которая принимает в качестве параметров массив и функцию обратного вызова. Функция обратного вызова может быть, например, математической функцией, которая будет применяться к каждому элементу этого массива. При желании также напишите тесты, аналогичные примерам ниже.*/

// function processArray(arr, callback) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// // Тест 1: Умножение каждого элемента на 2
// const testArr1 = [1, 2, 3, 4];
// const multiplyBy2 = (num) => num * 2;
// const result1 = processArray(testArr1, multiplyBy2);
// console.log(result1); // [2, 4, 6, 8]

// // Тест 2: Возведение в квадрат каждого элемента
// const testArr2 = [1, 2, 3, 4];
// const square = (num) => num ** 2;
// const result2 = processArray(testArr2, square);
// console.log(result2); // [1, 4, 9, 16]

//   **************************************************
//Второй вариант
const arr = [1, 2, 3, 4, 5];
function processArray(arr, callback) {
  return arr.map(callback);
}

function square(num) {
  return num * num;
}

// const squaredArr = processArray(arr, square);
// console.log(squaredArr); // [1, 4, 9, 16, 25]

function double(num) {
  return num * 2;
}

const doubledArr = processArray(arr, double);
console.log(doubledArr); // [2, 4, 6, 8, 10]

console.log(processArray(arr, square));
console.log(processArray(arr, double));

//   _____________________________________________
//3й вариант
// const processArray = (a, fn) => a.map(fn);

// *********************************************************

//Находим большее число из массива( метод Reduce)

let a = [-3, 14, -5, 7, -6, 2];

let b = a.reduce((accum, item) => {
  if (item > accum) {
    accum = item;
  }
  return accum;
});

console.log(b);

//_______________________________

let a1 = [
  { id: 55, city: "arc" },
  { id: 75, city: "rca" },
  { id: 175, city: "bra" },
];
let b1 = a1.reduce((accum, item) => {
  accum.push(item.id);
  return accum;
}, []);

console.log(b1);
//************************************************ */
//__________Метод isArray________________________

console.log(Array.isArray(b1)); //true

let c = "hello";
console.log(Array.isArray(c)); //false

// ______________________________________________________
// **********Метод includes*****************************
//______________________ true or false__________________
const transactions = [
  "571a319c8c",
  "bd32bd6c05",
  "1c28a0c411",
  "9b425707b3",
  "979d1c10a1",
  "94641b2966",
];
const test = [44, 55, 66, 77, 88, 2, 3, 4];

if (test.lastIndexOf(77) !== -1) {
  console.log("yes"); //yes
} else {
  console.log("no");
}
if (~test.lastIndexOf(747)) {
  // не стоит использовать
  console.log("yes");
} else {
  console.log("no"); //no
}
if (test.includes(77)) {
  console.log("yes"); //yes
} else {
  console.log("no");
}
if (test.includes(55, 1)) {
  console.log("yes"); //yes
} else {
  console.log("no");
}
if (transactions.includes("571a319c8c")) {
  console.log("yes"); //yes
} else {
  console.log("no");
}

const str = "abcdefgh";
if (str.includes("fg")) {
  console.log("yes"); //yes
} else {
  console.log("no");
}

const users = [
  { name: "ivanov", age: 44 },
  { name: "petrov", age: 14 },
  { name: "pitrov", age: 37 },
  { name: "alexeev", age: 43 },
];

let newUsers = users.filter((item) => {
  return item.name.includes("p");
});
console.log(newUsers);
//******************************************************** */
// _______________Метод Sort()______________________________

let exemple = [1000, 1, 100, 1000000, -1];
console.log(exemple);

for (let j = 0; j < exemple.length; j++) {
  for (let i = 0; i < exemple.length - 1; i++) {
    if (exemple[i] > exemple[i + 1]) {
      let first = exemple[i];
      exemple[i] = exemple[i + 1];
      exemple[i + 1] = first;
    }
  }
}
console.log(exemple); //[-1, 1, 100, 1000, 1000000]

for (let j = 0; j < exemple.length; j++) {
  for (let i = 0; i < exemple.length - 1; i++) {
    if (exemple[i] < exemple[i + 1]) {
      let first = exemple[i];
      exemple[i] = exemple[i + 1];
      exemple[i + 1] = first;
    }
  }
}
console.log(exemple); // [1000000, 1000, 100, 1, -1]
// __________________________________________________
// по умолчанию метод sort элементы массива сравнивает, как строки. Sort сортирует исходный массив, не создает новый!!!
/* Мы можем изменять принцип сравнения элементов, для этого надо написать функцию callback, где прописываем условия по каким будет происходить сравнение пары элементов нашего массива. Ключевым является то число, которое будет возвращать (return) наша функция: положительное - элементы массива меняются местами, отрицательное или ноль - элементы остаются на своих местах.

function comparer (a,b){
    return a-b
}
Далее нашу функцию сравнения передаем параметром в метод sort():
array.sort(comparer)/
Метод sort() сортирует массив на месте и возвращает также отсортированный массив.*/

let number = [1, 4, 2, 9, 3, 5, 7, 6, 8];
number.sort();
console.log(number); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
let number2 = [134, 456, 222, 9, 3, 567, 701, 6, 8];
number.sort();
console.log(number2); //[134, 456, 222, 9, 3, 567, 701, 6, 8]
let numbers = [134, 456, 222, 9, 3, 567, 223, 701, 6, 8];

numbers.sort(comparer);
console.log(numbers); //[3, 6, 8, 9, 134, 222, 223, 456, 567, 701]

numbers.sort(comparer2);
console.log(numbers); // [701, 567, 456, 223, 222, 134, 9, 8, 6, 3]

function comparer(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}
function comparer2(a, b) {
  if (a > b) return -10000;
  if (a < b) return 1;
}
function comparer3(a, b) {
  return a - b;
}
function comparer4(a, b) {
  return b - a;
}

//Положительное число в "return" - переставляет элементы местами, отрицательное оставляет на прежнем порядке.

let numbers2 = [134, 223, 456, 222, 9, 3, 567, 223, 701, 6, 8];
numbers2.sort(comparer);
console.log(numbers2); //[3, 6, 8, 9, 134, 222, 223, 223, 456, 567, 701]
numbers2.sort(comparer3);
console.log(numbers2); //[3, 6, 8, 9, 134, 222, 223, 223, 456, 567, 701]
numbers2.sort(comparer4);
console.log(numbers2); //[701, 567, 456, 223, 223, 222, 134, 9, 8, 6, 3]

number2.sort(function (a, b) {
  alert(a + "<>" + b);
  return a - b;
});
