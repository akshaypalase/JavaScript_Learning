console.log("=============Assignment 0B=============");
function isEvenOdd(value){
if(value % 2==0){
    return console.log(value,"is Even number.");
}
return console.log(value,"is Odd number.");
}
isEvenOdd(45);
isEvenOdd(70);
isEvenOdd(67);
isEvenOdd(45);
console.log("==================================");
function voteEligibility(age){
    if(age >= 18){
        return console.log("You are eligible for vote:-",age);
    }
    return console.log("You are not eligible for vote:-",age);
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);
console.log("==================================");
function string(value) {
    var stringLen = value.length;
    if (stringLen > 10) {
       return console.log(`string ${value} contains more than 10 characters.`);
    }
    return console.log(`string ${value} not contains more than 10 characters.`);
 
 
 }
 string(`"JavaScript-ES6"`);
 console.log("==================================");
 function stringWith(statement) {
    var result = statement.startsWith("Java");
    console.log(statement, `This string start with "Java".`);
 }
 stringWith("JavaScript Language");