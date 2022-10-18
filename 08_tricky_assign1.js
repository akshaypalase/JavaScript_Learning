console.log("==========Assignment No-0A========================");
var string=" I am very good IT Developer";
var lowercasevowels="aeiou";
var uppercasevowels="AEIOU";
var c=0;
for (let index = 0; index < string.length; index++) {
     var char=string.charAt(index);
     var isLower=lowercasevowels.includes(char);
     var isUpper=uppercasevowels.includes(char);
     if(isLower || isUpper){
        c=c+1;
     }
    
}
console.log(`Total Vowels Available in Given String:-"${c}"`);
console.log("=================================================");
function cube(value){
    c=0;
    for(i=0;i<=value;i++){
        c=c+i*i*i;
    }
    console.log(`Sum of Cube Number from 1 to 5:-${c}`);
}
cube(5);
console.log("=================================================");
string1 = "Hard work always pays back";
string2 = "Soon I will be Angular IT Champ";

function oddPositionedChars(value) {
    var finalString = "";
    for (let index = 1; index < value.length; index++) {
        if (index % 2 != 0 && value[index] != " ") {
            finalString = finalString + value[index];



        }
    }
    console.log(`Given String:- "${value}"`);
    console.log(`Odd Positioned Characters:- "${finalString}"`);
    console.log("=================================================");
}
oddPositionedChars(string1);
oddPositionedChars(string2);