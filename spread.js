//Spread и Rest

const citiesRussia = ["Москва", "Санкт-Петербург", "Казань", "Новосибирск"];

const citiesEurope = ["Берлин", "Прага", "Париж"];

const citiesRussiaWithPopulation = {
  Moskow: 20,
  SaintPeterburg: 8,
  Kazan: 5,
  Novosibirsk: 3,
};
const citiesEuropeWithPopulation = {
  Moskow: 26,
  Berlin: 10,
  Praha: 3,
  Paris: 2,
};

//Spread (набор строк)
// console.log(...citiesRussia); //Москва Санкт-Петербург Казань Новосибирск

//клонируем массив
// const allCities = [...citiesRussia, "Вашингтон", ...citiesEurope];
// console.log(allCities); // ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск', 'Вашингтон', 'Берлин', 'Прага', 'Париж']

console.log({ ...citiesRussiaWithPopulation }); // клонирование, создание нового объекта

console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation }); //{...Moskov:26...}// если ключи повторяются, то берется из последнего массива.

// Practice

console.log(Math.max(5, 37, 42, 17)); //42

const numbers = [5, 37, 42, 17];
console.log(Math.max(numbers)); //NaN
console.log(Math.max(...numbers)); //42
console.log(Math.max.apply(null, numbers)); //42

const divs = document.querySelectorAll("div");
console.log(divs); //NodeList(4) [div, div, div, div]

const nodes = [...divs]; // применение оператора Spred к псевдомассиву(метод map() не будет работать)
console.log(nodes); //[div, div, div, div]-получаем массив(метод map()будет работать)

console.log(Array.isArray(divs)); //false
console.log(Array.isArray(nodes)); //true

//Rest
function sum(a, b, ...rest) {
  console.log(rest); //(3) [3, 4, 5]- оператор rest
  console.log(...rest); //3 4 5 -оператор spread (из массива в числа)
  return a + b + rest.reduce((ac, item) => ac + item, 0);
}

const numbers_ = [1, 2, 3, 4, 5];

console.log(sum(...numbers_)); //15

// const a = numbers_[0];
// const b = numbers_[1];

//деструктуризация
const [a, b, ...other] = numbers_; //применяем оператор rest
console.log(a, b, other); //1 2 (3) [3, 4, 5]

const person = {
  name: "Max",
  age: 20,
  city: "Moskow",
  country: "Russia",
};

const { name, age, ...address } = person;
console.log(name, age); //Max 20
console.log(name, age, address); //Max 20 {city: 'Moskow', country: 'Russia'}

//Spread - разворачивает массивы или объекты и служит для создания новых массивов(объектов)

//Rest - собирает все параметры либо в массив, либо в объектах все остальные поля.
//__________________________________________________________

//********************Деструктуризация в JS**************/

function calkValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}

// const result = calkValues(42, 10);//#1
// const sum_ = result[0];
// const sub = result[1];

// const [sum_, sub]= result//#2

//объединяем №1 и №2
const [sum_, sub = "Вычитания нет", mult, ...other_] = calkValues(42, 10);

console.log(sum_, mult, other_, sub); //52 420 [4.2] 32

//Object
const person_ = {
  name: "Max",
  age: 20,
  address: {
    country: "Russia",
    city: "Moscow",
  },
};

// const name = person_.name
// const {
//   name: firstName = "Без имени",
//   age: age1,
//   car = "Машины нет",
//   address: { city: homeTown, country },
// } = person_;

// console.log(firstName, age1, car, homeTown, country); //Max 20 Машины нет Moscow Russia

// const { name: name1, ...info } = person_;
// console.log(name1, info); //Max {age: 20, address: {…}}
//__________________________________
// function logPerson(per) {
//   console.log(per.name + " " + per.age);
// }

// logPerson(person_); //Max 20
// ________________________________
function logPerson({ name: firstName = "111", age }) {
  console.log(firstName + " " + age);
}

logPerson(person_); //Max 20
