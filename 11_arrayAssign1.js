console.log("============Array Assignment-01============");
console.log("--------------------------Q.1--------------------------");
const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Given array:-",fruits_seasonal);
var a=fruits_seasonal[0];
console.log(`First Element of array:-${a}`);
var b=fruits_seasonal[fruits_seasonal.length-1];
console.log(`Last Element of array:-${b}`);
console.log("--------------------------Q.2--------------------------");
console.log("Given array:-",fruits_seasonal);
fruits_seasonal.unshift("papaya");
console.log("Adding new element",fruits_seasonal);
console.log("--------------------------Q.3--------------------------");
console.log("Given array:-",fruits_seasonal);
fruits_seasonal.splice(4,1);
console.log("Element Removed",fruits_seasonal);
console.log("--------------------------Q.4--------------------------");
console.log("Given array:-",fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log("Adding Element in Last position",fruits_seasonal);
console.log("--------------------------Q.5--------------------------");
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log('Adding "Dragon fruit" before "water melon"',fruits_seasonal);
console.log("--------------------------Q.6--------------------------");
console.log("Given array:-",fruits_seasonal);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);
console.log("--------------------------Q.7--------------------------");
console.log("Given array:-",fruits_seasonal);

let c=fruits_seasonal.splice(1,4);
console.log(c)

