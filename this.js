console.group()

const userPro1 = {
    objectName:'UserPro1',
    name:'Vlad',
    profession:'Fron-End',
    introduce(){
        console.log(`Hello from ${userPro1.objectName}!
        My name is ${userPro1.name} and I am a ${userPro1.profession}`);
    }
}

userPro1.introduce()
const userSimpl = {
    objectName:'UserSimp1',
    name:'Nick',
    profession:'Back-End',
    introduce(){
        console.log(`Hello from ${userSimpl.objectName}!
        My name is ${userSimpl.name} and I am a ${userSimpl.profession}`);
    }
}

userSimpl.introduce()

function introduce(){
    console.log(`Hello from ${userPro2.objectName}!
        My name is ${userPro2.name} and I am a ${userPro2.profession}`); 
}


const userPro2 = {
    objectName:'UserPro2',
    name:'Vlad',
    profession:'Fron-End',
    introduce:introduce
}
userPro2 .introduce()

const userSimp2 = {
    objectName:'UserSimp2',
    name:'Nick',
    profession:'Back-End',
    introduce:introduce
}

userSimp2.introduce()

const userPro3 = {
    objectName:'UserPro3',
    name:'Vlad',
    profession:'Fron-End',
    introduce:introduce
}
userPro3 .introduce()

// const userSimp3 = {
//     objectName:'UserSimp3',
//     name:'Nick',
//     profession:'Back-End',
//     introduce:introduce3
// }

// userSimp3.introduce()


// console.groupEnd()
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// this



const userPro5 = {
    objectName:'UserPro5',
    name:'Vlad',
    profession:'Fron-End',
    introduce(){
        console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);
    }
}

userPro5.introduce()
const userSimp5 = {
    objectName:'userSimp5',
    name:'Nick',
    profession:'Back-End',
    introduce:userPro5.introduce
}

function introduce4(){
    console.log(`Hello from ${this.objectName}!
    My name is ${this.name} and I am a ${this.profession}`);
}
userSimp5.introduce()

const userPro6 = {
    objectName:'userPro6',
    name:'Vlad',
    profession:'Fron-End',
    introduce:introduce4
}

userPro6.introduce()

const userSimp6 = {
    objectName:'userSimp6',
    name:'Nick',
    profession:'Back-End',
    introduce:introduce4
}

userSimp6.introduce()

//вложенности - undefined

function someFoo(param){
    console.log('!!!!!!!!', this);
}

someFoo()

const userSimp7 = {
    objectName:'userSimp7',
    name:'Nick',
    profession:'Back-End',
    introduce(){
        const innerFoo = function(){ //function всегда указывает на window
            console.log('Do something', this);
        }
        console.log((this));
        console.log(`Hello from ${this.objectName}!
        My name is ${this.name} and I am a ${this.profession}`);

        innerFoo()
    }
}

let tempFoo = userSimp7.introduce()
