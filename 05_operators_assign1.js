console.log("============Assignment-01================");
var wordLengthSquare = function (value) {
    var lengthOfWord = value.length;
    return lengthOfWord * lengthOfWord;
}
console.log(`square of length of "JavaScript:-" ${wordLengthSquare("JavaScript")}`);
console.log(`square of length of "Google:-" ${wordLengthSquare("Google")}`);
console.log(`square of length of "Developer:-" ${wordLengthSquare("Developer")}`);

console.log(`================================================`);
function statement() {
    var string = "I am React Developer";
    console.log(`reverse of "I am React Developer":-  ${(string.split(" ").reverse())}`);
    var givenLength = string.length;
    console.log("Length of String:-", givenLength);
    var totalLength = (string.split(" ").length);
    console.log("Words in String:-", totalLength);
    var result = givenLength / totalLength;
    console.log(`Length of String / total words in string:- ${result}`);
    console.log(`Length of String * total words in string:- ${totalLength * givenLength}`);
}
statement();