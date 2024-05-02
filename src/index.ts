// let theName : string = "EE"
// let theAge : number = 33
// let hire : boolean = true
// let all:any;

// theName = "rr "

// function add(n1:number, n2:number) {
//   return n1 + n2;
// }
// console.log(add(10,20))
// console.log(typeof add(10,20))

// let all : string | number | boolean;
// all = "ee"
// all = 33
// all = true

// let myArr = ["ee","ee",44]
// for(let i=0; i<myArr.length;i++){
//     console.log(myArr[1])
// }
// هنا مفيش مشكله

// for(let i=0; i<myArr.length;i++){
//     console.log(myArr[1].repeat(3))
// }
// هنا في مشكله
// هو عمل شيك على التايب قبل التنفيذ
//  Property 'repeat' does not exist on type 'number'

// let myArr:string[] = ["ee","ee",44]
// for(let i=0; i<myArr.length;i++){
//     console.log(myArr[1].repeat(3))
// }
// رقم محطوط في مصفوفه من الاسترينج XXXX

// Type annotation with multiDimensional arrays

// let arr1:number[] = [1,2,3]
// let arr2:string[] = ["ww",'ee','rr']
// let arr3:(string | number) [] = [1,2,3,"ww","ee"]

// let arr4 : (string | number | string[])[] = [1,2,3,'ee',['rr']]
// let arr5:(string | number | string[]| boolean[])[] = ["ee",1,2,["rrr"],[true,false]]

// let arr6:(string | number | (string | number[])[]| boolean[])[] = ["ee",1,2,["rrr",[4,5]],[true,false]]

// let arr7:(string | number | (string | number[])[]| boolean)[] = ["ee",1,2,["rrr",[4,5]],true,false]

// Type Anootation with function

// let show = true;
//"noImplicitReturns": false,
// function showDestails(name,age,salary){
//Parameter 'name' implicitly has an 'any' type.  // "noImplicitAny": true,
// Parameter 'age' implicitly has an 'any' type.
// 'salary' is declared but its value is never read. / Parameter 'salary' implicitly has an 'any' type.
//     if(show){
//         return `name : ${name} , age : ${age} , Salary : `
//     }
// }

// // console.log(showDestails("ee",40)) // Expected 3 arguments, but got 2.
// console.log(showDestails("ee",40,44))
/*
هنا هترجع 
undefinded 
علشان انا مش عامل 
return
*/

/******************************************************** */

// //"noImplicitReturns": true,
// function showDestails(name: string,age: number,salary: number){
//     //Not all code paths return a value.
//     if(show){
//         return `name : ${name} , age : ${age} , Salary : `
//     }
// }

// // console.log(showDestails("ee",40)) // Expected 3 arguments, but got 2.
// console.log(showDestails("ee",40,44))

/*
 هنا هتطلع 
 Error - //Not all code paths return a value.
 لازم اعمل 
 return
*/

/***************************************** */

// function showDestails(name: string,age: number,salary: number){
//     //  "noUnusedParameters": true,   //'salary' is declared but its value is never read.
//     let x = 'x' // 'x' is declared but its value is never read.
//     //"noUnusedLocals": true,
//     if(show){
//         return `name : ${name} , age : ${age} , Salary : `
//     }
//     return `no data`
// }
// console.log(showDestails("ee",40,44))

/*********************************************** */

//  Best Way

// function showDestails(name: string,age: number,salary: number) : string{
//     if(show){
//         return `name : ${name} , age : ${age} , Salary : ${salary}`
//     }
//     // return 33 //Type 'number' is not assignable to type 'string'.
//     return `No Data`
// }
// console.log(showDestails("ee",40,44))

/********************************************************** */

// Optional and Default Parameters in Functions

// Error
// function showData(name,age,country){ //Parameter 'country' implicitly has an 'any' type, but a better type may be inferred from usage.
//     return `${name} ${age} ${country}`
// }
// console.log(showData("ee")) //Expected 3 arguments, but got 1.

// Good Code
// function showData(name: string = "test",age: number,country: string) : string{
//     return `${name} ${age} ${country} `
// }
// console.log(showData(undefined,88,"eg"))

// Optional -- Error
//  function showData(name: string,age: number,country?: string){
//      return `${name} ${age} ${country} `
//  }
//  console.log(showData("ee")) //Expected 2-3 arguments, but got 1

// Optional  - Error
//  function showData(name?: string,age: number,country: string){ //A required parameter cannot follow an optional parameter.
//      return `${name} ${age} ${country} `
//  }
//  console.log(showData("ee",88))

// Optional -- Good

//  function showData(name: string,age: number,country?: string){ //A required parameter cannot follow an optional parameter.
//      return `${name} ${age} ${country} `
//  }
//  console.log(showData("ee",88))

/******************************************************** */

//  Rest Parameter

// function addAll(...nums:number[]) : number{
//     let result = 0;
//     for(let i =0; i<nums.length;i++){
//         result += nums[i]
//     }
//     /*
//         nums.forEach((num)=> result += num)
//     */
//     return result
// }
// console.log(addAll(10,20,20,+true)) // OR Number(true)

/********************************************** */

// Annotation With Anon Function And Arrow Function

// const add = function (n1: number, n2: number): number {
//   return n1 + n2;
// };
// console.log(add(3, 4));

// const addArrow = (n1: number, n2: number): number => n1 + n2;
// console.log(addArrow(4, 5));

/**************************************** */

// Tytpe Alias  اسم مستعار

// type st = string;
// let TheName: st = "ee";

// type num = number;
// let age: num = 88;

// // Combine Types
// type stAndNum = string | number;
// let arr: stAndNum[] = [1, 2, "rr"];

// type TButtons = {
//   up: string;
//   right: string;
//   down: string;
//   left: string;
// };

// function getActions(btns: TButtons) {
//   console.log(`Action For Button up is ${btns.up}`);
//   console.log(`Action For Button right is ${btns.right}`);
//   console.log(`Action For Button down is ${btns.down}`);
//   console.log(`Action For Button left is ${btns.left}`);
// }

// getActions({
//   up: "Go Up",
//   right: "Go Right",
//   down: "Go Down",
//   left: "GO Left",
// });

/*
Action For Button up is Go Up
Action For Button right is Go Right
Action For Button down is Go Down
Action For Button left is GO Left
*/

/*********************************************** */
// Extend New Type from An Exists one

// type TButtons = {
//   up: string;
//   right: string;
//   down: string;
//   left: string;
// };

// type Last = TButtons & {
//   x: boolean;
// };

// function getActions(btns: Last) {
//   console.log(`Action For Button up is ${btns.up}`);
//   console.log(`Action For Button right is ${btns.right}`);
//   console.log(`Action For Button down is ${btns.down}`);
//   console.log(`Action For Button left is ${btns.left}`);
// }

// // Property 'x' is missing in type '{ up: string; right: string; down: string; left: string; }' but required in type '{ x: boolean; }'

// getActions({
//   up: "Go Up",
//   right: "Go Right",
//   down: "Go Down",
//   left: "GO Left",
// });

// function getActions(btns: Last) {
//   console.log(`Action For Button up is ${btns.up}`);
//   console.log(`Action For Button right is ${btns.right}`);
//   console.log(`Action For Button down is ${btns.down}`);
//   console.log(`Action For Button left is ${btns.left}`);
//   console.log(`Action For Button X is ${btns.x}`);
// }

// getActions({
//   up: "Go Up",
//   right: "Go Right",
//   down: "Go Down",
//   left: "GO Left",
//   x: true,
// });

/*
Action For Button up is Go Up
Action For Button right is Go Right
Action For Button down is Go Down
Action For Button left is GO Left
Action For Button X is true
*/

/******************************************************** */

// Tuple

// let articale: [number, string, boolean] = [10, "Title One", true];

// articale = [10, "Title One", true,"test"]; //Source has 4 element(s) but target allows only 3
// articale.push("test") // شغال عادي

// let articale: readonly [number, string, boolean] = [10, "Title One", true];
// articale.push("test") // Property 'push' does not exist on type 'readonly [number, string, boolean]'

/********************************************************************** */

// function logging(msg) {
//   console.log(msg);
// }

// console.log(logging("test"));

/* ****************************Type Assertions ****************************/

// let myImg = document.getElementById("my-img")
// console.log(myImg.src) //Property 'src' does not exist on type 'HTMLElement'
/*
هنا هو عارف انها 
HTMLElement 
بس مش عارف انهي عنصر بالظبط
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
// console.log(myImg.src); // شغال تمام

/// OR Using Interface
// let myImg = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImg.src); // شغال تمام

// Error

// let myImg = <HTMLImageElement>document.getElementById("my-img");
// console.log(myImg.value); // Property 'value' does not exist on type 'HTMLImageElement'
/* 
علشان الصوره معندهاش 
Attribute 
اسمه 
value
*/


// علشان نتأكد انه مش بيعمل تشيك بعديك
// let data: any = "1000";
// console.log((data as string).repeat(3)); // 100010001000
 //  هنا مفيش مشكله 


 let data : any = 1000
 console.log((data as string).repeat(3));  // مش هيطلع ايرور الا لما ارن الكود 
