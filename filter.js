// //this is filter function to helper for react filter
//  const age = [32,33,16,40];

//  const filterager = age.filter((age)=>{
//    return age >= 18;
//  })

//  console.log(filterager)

const number = [10, 20, 30, 40];

const filterFunction = (num) => {
  return num>20;
};
const filterNumber = number.filter(filterFunction);
console.log(filterNumber);
