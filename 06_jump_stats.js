for (let index = 0; index < 10; index++) {
    if(index==5){
        break;
    }
    console.log(index); 
}

for (let index = 0; index < 10; index++) {
    if(index==2){
        continue;
    }
    console.log(index); 
}
 // WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}