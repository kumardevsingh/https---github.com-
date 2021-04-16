// function countLetters(str) {
//     let tempArr = str.split('');

//     tempArr = tempArr.sort((a, b) => {
//         return a > b ? 1 : -1;
//     })

//     let letters = [];
//     let count = 1;

//     for (let i = 0; i < tempArr.length; i++) {
//         if (tempArr[i] === tempArr[i + 1]) {
//             count++;
//         } else {
//             let value = `${count}${tempArr[i]}`;
//             letters = [...letters, value];
//             count = 1;
//         }

//     }

//     return letters.join('');

// }
// console.log(countLetters('aabbbcccccddefrraaa'));
//

/* console.log("=====First task started====");

for (let i = 0; i < 2000; i++) {
    setTimeout(() => {
        console.log("Set time out task resolve in ms ", i);
    }, i)
}

console.log("====Second Task Started=========="); */

// function myClass(name,age){
//     this.name = name;
//     this.age = age;
//     let mFun = function(){
//         return `${this.name} ${this.age}`;
//     }
//     return mFun;
// }

// //let a=  new myClass("dev",22); //it would return the instance object.

// let a =  myClass("Dev",22);

// console.log(a)


// class myClass{
//     constructor(name,age){
//         this.name = name;
//         this.age =age;
//     }
// }

// let a = new myClass("Dev",11);
// console.log(a)


// let name = new Object("John");
// let age = new Object(28);
// console.log("Name : "+name+" & Age : "+age);

let obj1 = {};

let obj2 = Object.create({});

console.log(obj1)
console.log(obj2)