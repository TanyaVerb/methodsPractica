// let arr = [1,2,3];
// console.log(arr);

// let arr2 =arr.toString()
// console.log(arr2);
// let arr3 =arr2.toLowerCase()
// console.log(arr3);

// let str = 'str'
// let str2 = String('str')
// console.log(str===str2);//true
// let num =2;
// let num2 = Number(2)
// console.log(num===num2);//true

// let arr= [1,2,3];
// let arr4 = Array (1,2,3)
// console.log(arr===num2);

// let bool = Boolean
// let bool2 = bool(true)

// let obj = Object(null) //возвращает пустой объект
// let obj1 = Object('2') //

// 'use strict' //- всегда window

//использование 'use strict'
// в контексте чего вызывается
// как вызывается функция
//помнить, что передав колбэк может теряться

// console.log( 'в глоб конт',this);
// function foo(){
//     console.log('',this);

// }

// const arrFoo = ()=>{
//     console.log('в глоб', this); // при use strict не меняется
// }
// foo()

// const obj ={
//     name:'Vlad',
//     arr:[1,2,3,4],
//     sayThis(){
//         console.log('ивызов из obj', this);
//         this.arr.forEach((item)=>{
//             console.log(this.name);
//         })


//     },
//     sayThisArrFoo: () =>{
//         console.log('ивызов из obj', this);
//     }
// }
// obj.sayThis()
// obj.sayThisArrFoo()//window



// let body = document.querySelector('body').addEventListener('click', function(){
//     console.log(this); // body
// })

//________________________________________
'use strict'

// function foo (name, age, hasCar){
//     console.log(this); 
//      return{
//         name: name,
//         age:age,
//         hasCar
//      }
// }

// foo()

// const emtyObj1 = foo('Vlad', 123, false)
// const emtyObj2 = foo('Anna',21,true)
// const emtyObj3 = foo('Dima',23, true)

// console.log((emtyObj1));
// console.log((emtyObj2));
// console.log((emtyObj3));

//this - конструкторы, вызываются при пом. New, this указывает на  (инстанс)результат выполнения функции

// если вызвать функцию (всегда function) с ключевым словом new то ф-ция начнет возвращать пустой объект (экземпляр)
//this внутри функции => экземпляр, который создан при помощи конструктора
// у экземпляра есть свойство constructor указывает на функцию-конструктор
//функция- конструктор всегда возвращает пустой объект(return игнор)
//у каждого конструктора есть св-во prototype, кот является пустым объектом
//Наполняя prototype любыми свойствами мы тем самым наполняем свойствами и все экземпляры данного конструктора
// когда конструктор создает экз помимо свойства конструктор  в экземпляр помещается скрытое св-во __proto_ которое ссылается на prototype конструктра 
//_у ка_____
function CarFactory(model, years) {
    // // let obj = {}
    console.log(this);


    // this.model = model;
    //     this.years = years;
       CarFactory.prototype.setModel = function (model) {
            if (typeof model === 'string') {
                this.model = model
            } else {
                console.log('Принимаем строку');
                this.model = "Модель не указана"

            }

        };
        CarFactory.prototype.getModel = function () {
            if (!this.years){
                console.log('Модель не указана, укажите через setYear');
            }else{
                return this.years
            }
    
            return this.model
        };

       CarFactory.prototype.setYears = function (years) {
            if (typeof years === 'number') {
                this.years = years
            } else {
                console.log('Принимаем число');
                this.years = ""
            }
        }

    CarFactory.prototype.getYear = function () {
        if (!this.years){
            console.log('Год не указанб укажите год');
        }else{
            return this.years
        }

        return this.years
    }
    this.setModel(model)
    this.setYears(years)

}

const car1 = new CarFactory('', 2005)
const car2 = new CarFactory('Audi', 2005)
const car3 = new CarFactory('Opel', 1996)




console.log(car1);
console.log(car2);
console.log(car3);

console.log(car3.setYears(2000));
console.log(car3);
console.log(car1.setModel('Porshe'));


// console.log(car3.getYears());
// car2.setYears('2020')

// console.log();(CarFactory.name)
// console.log();(CarFactory.prototype)
// CarFactory


// console.log(emtyObj1.model);
// console.log(emtyObj1.years = 1000);
// console.log(emtyObj1);

// console.log(emtyObj1.getModel());
// console.log(emtyObj1.getYear());
// console.log(emtyObj1.setModel('BMW'));
// console.log(emtyObj1);
//  const emtyObj2 = new CarFactory ('BMV')
//  emtyObj2.constructor

//  emtyObj1.signal()

//  console.log(emtyObj2.constructor);// указывает на функцию 

