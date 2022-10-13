var stringHandson = function(){
    var result="  hey you are doing good, keep it up    ";
    console.log(`String Before Performing any Operation:-${result}`);
    console.log(`=============================================`);
    
    console.log(`length of given string:-${result.length}`);
    console.log(`=============================================`);
    var trimResult=result.trim();
    console.log(`After removing spaces:-${trimResult}`);
    console.log(`=============================================`);
    var count=(result.length-trimResult.length)
    console.log(`count space:-${count}`);
    console.log(`=============================================`);
    var character = trimResult.charAt(0);
    var charResult = trimResult.charAt(trimResult.length - 1);
    console.log(`first character:${character}   And last character: ${charResult}`);
    console.log(`=============================================`);
    var spaceCount = trimResult.split(" ");
    console.log(`total words count:- ${spaceCount.length}`);
    console.log(`=============================================`);
    var position = result.indexOf("good");
    console.log(`indexof word "good" :-${position}`);
    console.log(`=============================================`);
    console.log(` substring from 22:- ${result.substring(22)}`);
     console.log(` slice from 22:-${result.slice(22)}`);
     console.log(`=============================================`);
     console.log(`string end with up:-${trimResult.endsWith("up")}`);
     console.log(`=============================================`);
      console.log(`string start with hey:-${trimResult.startsWith("hey")}`);
}
stringHandson();