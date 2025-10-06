const namelist = ["ajay", "ravi", "avneesh", "mohamn"];
const index = namelist.indexOf("ravi");
if (index !== -1) {
  namelist.splice(index, 1);
}
// console.log(namelist);
//Accessing every item (use of for of loop)
for (const name of namelist) {
  console.log(name);
}

function multiply(number) {
  return number * 2;
}
