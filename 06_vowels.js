// WAP to just log the vowels from the given string ; a e i o u, A E  I O U 
var givenString = "a I love JavaScript";
console.log("================= Just log Vowels ======================");
for (let index = 0; index < givenString.length; index++) {
    var char = givenString.charAt(index); // a
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"
        || char == "A" || char == "E" || char == "I" || char == "O" || char == "U") {
        console.log(char);
    }
}


