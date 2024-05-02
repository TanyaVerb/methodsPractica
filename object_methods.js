const obj = {
  name: "Tanya",
  age: 35,
  dog: "Lacky",
  foo() {
    console.log(1);
  },
};

const arrA = ["book", "car", 777, { car: "BMW" }];

//   arr.tempkey = 'temp'

for (let el in obj) {
  console.log(obj[el]);
}

console.log(Object.keys(obj)); //['name', 'age', 'dog'] массив ключей
console.log(Object.values(obj)); //['Tanya', 35, 'Lacky'] массив значений
console.log(Object.entries(obj)); // массив массивов[[], [key, value], []]

//Деструктуризация

const colorArr = ["black", "red"];

let value1 = colorArr[0];
let value2 = colorArr[1];

// let [valueD1, valueD2]=['black', 'red']
let [valueD1, valueD2] = colorArr;

console.log(valueD1, valueD2); //black red

const carsList = ["audi", "shkoda", "bmw", { name: " Vlad" }];

let myCar = carsList[0];
let sisterCar = carsList[1];
let brotherCar = carsList[2];

let [myCarD1, sisterCarD2, brotherCarD3] = ["audi", "shkoda", "bmw"];
console.log(myCarD1, sisterCarD2, brotherCarD3);

//  let(myCar, tempValue, value3, value4) = carList
//  let[myCar1, , , value4] = carList
//  console.log(myCar,  value4)
//  let[myCar2, ...rest] = carsList
//  console.log(myCar2,  rest)
let [...rest] = carsList;

// rest.shift()

console.log(rest);

const carsList1 = [
  [1, 2, 3],
  undefined,
  null,
  "",
  NaN,
  ,
  "shkoda",
  "bmw",
  { name: " Vlad" },
];

//длина не всегда соответствует количеству элементов
const [
  [num1, num2],
  elem1 = "This is default value1",
  elem2 = "This is default value1",
  elem3 = "This is default value1",
  elem4 = "This is default value1",
  elem5 = "This is default value1",
  elem6,
  elem7,
  elem8,
  elem9,
  elem10 = "",
] = carsList1;

console.log("num1", num1);
console.log("num2", num2);

console.log("elem1", elem1);
console.log("elem2", elem2);
console.log("elem3", elem3);
console.log("elem4", elem4);
console.log("elem5", elem5);
console.log("elem6", elem6);
console.log("elem7", elem7);
console.log("elem8", elem8);
console.log("elem9", elem9);
console.log("elem10", elem10);

const arrTest = [undefined, [1, [{ name: "Vlad" }]]];
console.log(arrTest.length); //2

let [el1 = "a", [el2, [el3]]] = arrTest;

console.log("el1", el1);
console.log("el2", el2);
console.log("el3", el3);

//диструк объекта

const car = "bmw";
const objO = {
  name: "Vlad",
  age: 32,
  car: undefined,
};

const { name = "Dima", car: myCar0 = " audi", age } = objO;
console.log(myCar0);
console.log(name); //Vlad
console.log(age);

let obj2 = {
  price: 30,
  product: "PKO",
};

//   function foo ({src, sort}){
//  if (!!src){
//     console.log(`картинка находится по адресу: ${src}`)
//  }else {
//     // console.log(Картинки нет' sort)
//  }
//   }
//let {src} = obj2
// foo(obj2);
const { price, product } = obj2;
console.log(price);
console.log(product);

const { ...rest1 } = obj2;
console.log(rest1);

//поверхностная копия
const copyObj = { ...obj2 };
//   delete obj2.price
console.log(copyObj);

// const copyArray =

// ************************************************************
//*************************Домашка***************************
/*решить  задачу
Условие:
У вас есть два массива: mainArray - основной массив элементов, и filterArray - массив элементов для фильтрации.
Вам нужно создать новый массив, содержащий только те элементы mainArray, которые присутствуют в filterArray.
Напишите функцию filterArrayByAnother(mainArray, filterArray), которая принимает два массива mainArray и filterArray,
и возвращает новый массив, содержащий только те элементы mainArray, которые присутствуют в filterArray.

const mainArray = [1, 2, 3, 4, 5];
const filterArray = [3, 4, 5, 6, 7];

console.log(filterArrayByAnother(mainArray, filterArray)); // Ожидаемый результат: [3, 4, 5]*/

const mainArray = [1, 2, 3, 4, 5];
const filterArray = [3, 4, 5, 6, 7];

function filterArrayByAnother(mainArray, filterArray) {
  return mainArray.filter((item) => filterArray.includes(item));
}

console.log(filterArrayByAnother(mainArray, filterArray));

// *******************************************************

function filterArrayByAnother2(mainArray, filterArray) {
  // Создание нового массива для отфильтрованных элементов
  let filteredArray = [];

  // Итерация по массиву основных элементов
  for (let i = 0; i < mainArray.length; i++) {
    // Получение текущего элемента массива основных элементов
    const mainArrayElement = mainArray[i];

    // Проверка наличия текущего элемента массива основных элементов в массиве элементов фильтрации
    if (filterArray.includes(mainArrayElement)) {
      // Добавление текущего элемента массива основных элементов в отфильтрованный массив
      filteredArray.push(mainArrayElement);
    }
  }

  // Возвращение отфильтрованного массива
  return filteredArray;
}

// Пример использования
const mainArray2 = [1, 2, 3, 4, 5];
const filterArray2 = [3, 4, 5, 6, 7];

console.log(filterArrayByAnother2(mainArray2, filterArray2)); // Ожидаемый результат: [3, 4, 5]

//*************************************************** */
/*Способы создания поверхностной копии массива*******/

// 1 способ_____

const originalArray = [1, 2, 3, 4];
const newArray = originalArray;
console.log(newArray); //[1, 2, 3, 4]
console.log(newArray === originalArray); //true
// 2 способ__(оператор Spread)_________
const originalArray2 = [1, 2, 3, 4];
const newArray2 = [...originalArray2];
console.log(newArray2); //[1, 2, 3, 4]
console.log(newArray2 === originalArray2); //false

// 3 способ___________
const originalArray3 = [1, 2, 3, 4];
const newArray3 = originalArray3.slice();
console.log(newArray3); //[1, 2, 3, 4]
console.log(newArray3 === originalArray3); //false

// 4 способ___________
const originalArray4 = [1, 2, 3, 4];
const newArray4 = originalArray4.concat();
console.log(newArray4); //[1, 2, 3, 4]
console.log(newArray4 === originalArray4); //false

// 5 способ___________
const originalArray5 = [1, 2, 3, 4];
const newArray5 = Array.from(originalArray5);
console.log(newArray5); //[1, 2, 3, 4]
console.log(newArray5 === originalArray5); //false

// 6 способ______
const originalArray6 = [1, 2, 3, 4];
const newArray6 = [];
for (let i = 0; i < originalArray6.length; i++) {
  newArray6[i] = originalArray6[i];
}

console.log(newArray6); //[1, 2, 3, 4]
console.log(newArray6 === originalArray6); //false

// 7 способ____
// const originalArray7 = [1, 2, 3, 4];
// let newArray7 = originalArray7.map(function (elem) {
//   return elem;
// });
const originalArray7 = [1, 2, 3, 4];
let newArray7 = originalArray7.map((elem) => elem);

console.log(newArray7); //[1, 2, 3, 4]
console.log(newArray7 === originalArray7); //false

//Глубокое копирование
const originalArrayG = [1, 2, 3, 4, 5];
const newArrayG = JSON.parse(JSON.stringify(originalArrayG));
console.log(newArray5); //[1, 2, 3, 4]
console.log(newArray5 === originalArray5);
