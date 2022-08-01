// alert("shakil you are the king !!!! please please belive on yourself");

// this loop will be the for in statement loops through the properties of the object .

// const person = {fname: 'John', lname: 'Doe', age:25}

// let txt ="";
// for(let x in person){
//     //txt += person[x] + " ";
//     txt = txt + person[x] + " ";
// }
// console.log(txt);

// const employe = {e1:'SHAKIL', e2:"sadik", e3:"mahbub_alahi"}

// let emp = "";
// for(let x in employe){
//   emp = emp+ employe[x]+ " " + "/";
// }
// console.log(emp);

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x] + "<br/>";
// }
// console.log(txt)




///FOREACH FUNCTION
// let txt = "";
// const fruits = ["apple", "mango", "orange", "cherry"];

// fruits.forEach(shakil);

// function shakil(item, index) {
//   txt = txt + index + ":" + " " + item;
// }
// console.log(txt);


// i want to add total array value also i want to add total index number;

let totalValue=0;
let totalIndex= 0;

const numbers = [91, 20, 3, 40, 45]

numbers.forEach(myFunction)

function myFunction(item, index) {
    totalValue += item;
    totalIndex = index;
}
console.log("totalValue: " + totalValue);
console.log("totalIndex: " + totalIndex);