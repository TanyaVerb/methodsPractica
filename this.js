console.group("Варианты использования без this");

const userPro1 = {
  objectName: "UserPro1",
  name: "Vlad",
  profession: "Front-End",
  introduce() {
    console.log(`Hello from ${userPro1.objectName}!
        My name is ${userPro1.name} and I am a ${userPro1.profession}`);
  },
};

userPro1.introduce();

const userSimple1 = {
  objectName: "userSimple1",
  name: "Nick",
  profession: "Back-End",
  introduce: function () {
    console.log(`Hello from ${userSimple1.objectName}!
        My name is ${userSimple1.name} and I am a ${userSimple1.profession}`);
  },
};

userSimple1.introduce();

function introduce() {
  console.log(`Hello from ${userPro2.objectName}!
        My name is ${userPro2.name} and I am a ${userPro2.profession}`);
}

const userPro2 = {
  objectName: "UserPro2",
  name: "Vlad",
  profession: "Front-End",
  introduce: introduce,
};
userPro2.introduce();

function introduce2() {
  console.log(`Hello from ${userSimple2.objectName}!
        My name is ${userSimple2.name} and I am a ${userSimple2.profession}`);
}
const userSimple2 = {
  objectName: "userSimple2",
  name: "Nick",
  profession: "Back-End",
  introduce: introduce2,
};

userSimple2.introduce();

function introduce3(obj) {
  console.log(`Hello from ${obj.objectName}!
        My name is ${obj.name} and I am a ${obj.profession}`);
}

let userPro3 = {
  objectName: "UserPro3",
  name: "Vlad",
  profession: "Front-End",
  introduce: introduce3,
};
userPro3.introduce(userPro3);

const userSimple3 = {
  objectName: "userSimple3 ",
  name: "Nick",
  profession: "Back-End",
  introduce: introduce3,
};

userSimple3.introduce(userSimple3);

const userProCopyLink = userPro3;

userPro3 = null;

userProCopyLink.introduce(userProCopyLink);

let userPro4 = {
  objectName: "userPro4",
  name: "Vlad",
  profession: "Front-End",
  introduce: function () {
    console.log(`Hello from ${userPro4.objectName}!
        My name is ${userPro4.name} and I am a ${userPro4.profession}`);
  },
};

userPro4.introduce();
const userProCopyLink2 = userPro4;

// userPro4 = null
// userPro4.introduce = null

// userProCopyLink2.introduce()

console.groupEnd();
//_______________________________________________________________
//____________________________________________________________

//Меняем фон body с помощью функции random()
const body = document.querySelector("body");
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
}

function randomColor() {
  return `rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(
    0,
    255
  )},${getRandomIntInclusive(0, 255)})`;
}

body.style.background = randomColor();
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this
console.group("Работа с This");

const userPro5 = {
  objectName: "UserPro5",
  name: "Vlad",
  profession: "Front-End",
  introduce() {
    console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);
  },
};

userPro5.introduce();

const userSimple5 = {
  objectName: "userSimple5 ",
  name: "Nick",
  profession: "Back-End",
  introduce: userPro5.introduce,
};

userSimple5.introduce();

function introduce4() {
  console.log(`Hello from ${this.objectName}!
    My name is ${this.name} and I am a ${this.profession}`);
}

const userPro6 = {
  objectName: "userPro6",
  name: "Vlad",
  profession: "Front-End",
  car: {
    model: {
      name: "BMW",
      profession: "SPORT",
      introduce: introduce4,
    },
  },
};

userPro6.car.model.introduce();

const userSimple6 = {
  objectName: "userSimple6",
  name: "Nick",
  profession: "Back-End",
  introduce: introduce4,
};

userSimple6.introduce();
console.groupEnd();

//вложенности - undefined

// function someFoo(param) {
//   console.log("!!!!!!!!", this);
// }

// someFoo();

const userSimple7 = {
  objectName: "userSimple7",
  name: "Nick",
  profession: "Back-End",
  introduce() {
    const innerFoo = function () {
      //function всегда указывает на window
      console.log("Do something", this);
    };
    console.log(this);
    console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);

    innerFoo();
  },
};

userSimple7.introduce();

let tempFoo = userSimple7.introduce;

tempFoo();

function foo(params) {
  "use strict";
  console.log(this);
}

foo();

const foo1 = function () {
  console.log("this foo1", this);
};

function foo2() {
  console.log("this foo2", this);
}

const foo3 = () => {
  console.log("this foo3", this);
};

foo1();
foo2();
foo3();

const userSimple8 = {
  objectName: "userSimple8",
  name: "Nick",
  profession: "Back-End",
  introduce() {
    const foo = function () {
      console.log("foo", this);
    };
    foo();

    const foo2 = () => {
      console.log("foo2", this);
    };

    foo2();

    console.log("arrow", this);
    console.log(`Hello from ${this.objectName}!
                My name is ${this.name} and I am a ${this.profession}`);
  },
};

userSimple8.introduce();

///***************Домашка************************************
/*Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?*/
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name); // Каким будет результат?//ошибка

//____________________________________________________
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user2 = makeUser();

// alert(user2.ref().name); // John
// ___________________________________________________
/*Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта с именами a и b.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/
// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

//_______________________________________________
function statement() {
  console.log(
    `${this.name} c уровнем ${this.level} хочет поступить на курс ${this.course}`
  );
}

//   let student1 = {
//     name: 'Дмитрий',
//     course: 'HTML + CSS',
//     level: 'junior',
//     statement
//   }

let student2 = {
  name: "Ольга",
  course: "Basic JavaScript",
  level: "junior",
  statement,
};

//
// Дмитрий c уровнем junior хочет поступить на курс HTML + CSS
student2.statement(); // Ольга c уровнем junior хочет поступить на курс Basic JavaScript

let student1 = {
  name: "Пётр",
  statement() {
    console.log(`Имя студента ${this.name}`);
  },
};

student1.statement(); // Имя студента Дмитрий???
let anotherVar = student1.statement;
anotherVar(); // Имя студента

// ___________________________________________________
function Student(name, course) {
  this.name = name;
  this.course = course;
  this.school = "LearnJS";
}

let student3 = new Student("Вера", "JavaScript Basic");
console.log(student3);
let student4 = new Student("Таня", "JavaScript Basic");
console.log(student4);

// _______________________________________________________
let student5 = { name: "Степан" };
let student6 = { name: "Юлия" };
let sayName = function (course) {
  console.log(`${this.name} изучает ${course}`);
};

sayName.call(student5, "JS"); // Степан изучает JS
sayName.apply(student6, ["HTML + CSS"]); // Юлия изучает HTML + CSS
// _______________________________________________________
let student7 = { name: "Степан" };
let student8 = { name: "Юлия" };
let sayName1 = function () {
  console.log(this.name);
};

sayName1.bind(student7)(); // Степан
sayName1.bind(student8)(); // Юлия
// ______________________________________________________________
// function f() {
//   console.log(this.toString()); // 123
// }
// f.call(123); // this внутри функции f будет ссылаться на объект Number со значением 123
// ____________________________________________________________________
// var f = function () {
//   // Функция f вызывается с использованием ключевого слова new,
//   // поэтому this ссылается на создаваемый объект (обозначим его как object)
//   this.x = 5; // object.x = 5;

//   // В пункте 1.1 также указано, что в самовызывающихся функциях this ссылается на глобальный объект
//   (function () {
//     this.x = 3; // window.x = 3
//   })();
//   console.log(this.x); // console.log(object.x)
// };
// new f();
// ___________________________________________________________________________
var f = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function () {
    console.log(this.x); //undefined
  },
};

obj.m.call(f);

//__________________________________________________________________________
function hello() {
  console.log("Hello", this);
  return this;
}

hello(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const person = {
  name: "Vladilen",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
};
console.log(person);
console.log(person.sayHello());
console.log(window.hello());
console.log(person.sayHelloWindow()); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const person2 = {
  name: "Vladilen",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name} info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};
console.log(person.sayHelloWindow()); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this === window); //true;
console.log(person2.logInfo()); //Name is Vladilen, Age is 25

//Метод bind

const lena = {
  name: "Lena",
  age: 23,
};
// const fnLenaInfoLog = person2.logInfo.bind(lena);
// fnLenaInfoLog("frontend", "8-029-789-4561");
const fnLenaInfoLog = person2.logInfo.bind(lena, "frontend", "8-029-789-4561");
fnLenaInfoLog(); //Lena info/  Name is Lena / Age is 23/ Job is frontend/ Phone is 8-029-789-4561

////Метод call вызывает функцию сразу
person2.logInfo.call(lena, "frontend", "8-029-789-4561"); //Lena info/  Name is Lena / Age is 23/ Job is frontend/ Phone is 8-029-789-4561

//Метод apply второй параметр массив!
person2.logInfo.apply(lena, ["frontend", "8-029-789-4561"]); //Lena info/  Name is Lena / Age is 23/ Job is frontend/ Phone is 8-029-789-4561

//====================================================

const array = [1, 2, 3, 4, 5];
const array2 = [5, 8, 12];

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }
//console.log(multBy(array, 5)); //[5, 10, 15, 20, 25]

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2)); //(5) [2, 4, 6, 8, 10]
console.log(array2.multBy(4)); //(3) [20, 32, 48]
console.log([9, 8, 7].multBy(5)); //(3) [45, 40, 35]

console.log(this.innerWidth); //114
// ________________________________________________
/* 1) вне функции - объект window
2)внутри функции, если мы функцию запускаем на выполнение - объект window
3)если функцию запускаем по какому-либо событию, то this - это элемент, на котором произошло событие*/

console.log("Просто в программе");

function abc() {
  console.log("Внутри функции");
  console.log(this);
  console.log(3 + 5 / 2);
  this.style.background = "red";
}

// abc(); // Window /5.5

//если функция вызвана при событии, то this будет сам элемент(например, "p")
// document.querySelector("p").onclick = abc; //<p>...</p> / 5.5
document.querySelector(".btn").onclick = abc; //<p>...</p> / 5.5

// let p = document.querySelectorAll("p");
// p.forEach(function (elem) {
//   elem.onclick = abc;
// });

// document.querySelector("p").addEventListener("click", abc, false); //первый параграф
let p = document.querySelectorAll("p");
p.forEach(function (elem) {
  elem.addEventListener("click", abc);
});

document.querySelector(".btn1").onclick = function () {
  console.log(this);
  this.style.background = "orange";
};

//_____________________________________

function f1() {
  this.style.background = "orange";
}

for (let i = 0; i < p.length; i++) {
  p[i].onclick = f1;
}
//_____________________________________________
//При использовании стрелочной функции this в функции указывает на объект window!!!

// document.querySelector(".btn1").onclick = () => {
//   console.log(this);
//   this.style.background = "orange"; //Uncaught TypeError:(указывает на window)
// };

//______________________________________________________________________________

function atak() {
  console.log(this);
}
atak(); //window

const objA = {
  a: 1,
  b: 2,
  print() {
    console.log(this);
    console.log(this.a); //1
  },
};

objA.print(); //{a: 1, b: 2, print: ƒ}

// objA.print = function () {
//   setTimeout(function () {
//     console.log(this);
//   }, 1000);
// };

objA.print(); //window
//________________________________________________________________
//чтобы вложенные функции и (или) setTimeout не обращались к window, то можно использовать стрелочную функцию(она ничего не добавляет в контекст)

// objA.print = function () {
//   setTimeout(() => {
//     console.log(this);
//   }, 1000);
// };

objA.print(); //{a: 1, b: 2, print: ƒ}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const btnClick = document.querySelector(".btn2");
function log() {
  console.dir(this);
}
log(); //window / при строгом режиме "use strict" - undefined

btnClick.addEventListener("click", log); //<button class="btn2">click me</button>, так как btnClick - это объект (в любом режиме)
//___________________
function printThis() {
  console.log(this);
}

printThis(); //window

const myObj = { x: 1, y: 4 };

//привязка к определенному контексту
printThis = printThis.bind(myObj);
printThis(); //{a: 1, b: 2, print: ƒ}

const personM = {
  name: " Mikhail",
  prof: "Web-developer",
  hi() {
    console.log("Hello, my name is " + this.name);
  },
};

personM.hi(); //Hello, my name is Mikhail

const personP = {
  name: "Petr",
};

personM.hi.call(personP); //Hello, my name is Petr

//создаем в объекте personP свою функцию hi()
personP.hi = personM.hi.bind(personP);
console.log(personP); //{name: 'Petr', hi: ƒ}
personP.hi(); //Hello, my name is Petr

const number = [1, 2, 4];
console.log(Math.max(number)); //NaN
console.log(Math.max(...number)); //4
console.log(Math.max.apply(null, number)); //4
console.log(Math.max.call(null, 1, 2, 3, 4, 5)); //5

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//===============================Задачи==============================================
//2.1. f()
// var f = function () {
//   // Функция f вызывается с помощью простого вызова - f(),
//   // поэтому this ссылается на глобальный объект
//   this.x = 5; // window.x = 5;

//   // В пункте 1.1 также указано, что в самовызывающихся функциях this также ссылается на глобальный объект
//   (function () {
//     this.x = 3; // window.x = 3
//   })();
//   console.log(this.x); // console.log(window.x)
// };
// //Результат 3
// f(); //3
// //_______________________________________
// //2.2. new f();

// var f = function () {
//   // Функция f вызывается с использованием ключевого слова new,
//   // поэтому this ссылается на создаваемый объект (обозначим его как object)
//   this.x = 5; // object.x = 5;

//   // В пункте 1.1 также указано, что в самовызывающихся функциях this ссылается на глобальный объект
//   (function () {
//     this.x = 3; // window.x = 3
//   })();
//   console.log(this.x); // console.log(object.x)
// };
// new f();
// //Результат: 5
// //______________________________

// var obj = {
//   x: 4,
//   m: function () {
//     // из пункта 1.3 следует, что this === obj,
//     console.log(this.x); // console.log(obj.x)
//   },
// };

// obj.m(); //4
// //___________________________________
// var obj = {
//   x: 4,
//   m: function () {
//     // из пункта 1.2 следует, что this ссылается на вновь создаваемый объект
//     // но внутри данной функции не устанавливается значение для this.x, поэтому результат - undefined
//     console.log(this.x);
//   },
// };
// new obj.m(); //undefined
// //__________________________________
// var f = function () {
//   // Функция f вызывается с помощью метода call
//   // первым параметром в call указана сама функция (точнее объект) f, поэтому
//   // поэтому this ссылается на f
//   this.x = 5; // f.x = 5;

//   // В пункте 1.1 также указано, что в самовызывающихся функциях this ссылается на глобальный объект
//   (function () {
//     this.x = 3; // window.x = 3
//   })();
//   console.log(this.x); // console.log(f.x)
// };
// f.call(f); //5
// //_________________________________
// var obj = {
//   x: 4,
//   m: function () {
//     // функция вызвана с помощью метода call
//     // первым аргументом указана функция f
//     // поэтому this вновь ссылается на f
//     // в предыдущем примере f.x было присвоено значение 5, поэтому результат 5
//     console.log(this.x); // console.log(f.x)
//   },
// };
// obj.m.call(f); //5
// ____________________________
/*Внимание: Если данный пример рассматривать отдельно от остальных, то в логе будет не 5, а undefined. Попробуйте внимательно разобрать пример и объяснить поведение*/
var f = function () {
  this.x = 5;
  (function () {
    this.x = 3;
  })();
  console.log(this.x);
};

var obj = {
  x: 4,
  m: function () {
    console.log(this.x);
  },
};

obj.m.call(f); //undefined
