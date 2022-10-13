// this is my first code
console.log("Akshay Arun Palase ");
console.log("playing cricket");
console.log("playing Vollyball");
console.info("Listening to Music");
console.info("positive thinker");
console.info("eager to learn new skills");
console.warn("Trust everyone easily");
console.warn("I can not say no if anyone asks for help");
console.warn("i know basic excel trying to improve it");
console.log(30+50);
console.log(49*479);
function maleMarriageEligibility(gender,age,boyName){
       var result= gender="male" && age >=21
       ? `hey${boyName} you are eligible for marriage.`
       : `${boyName}you are not eligiable for marriage`;
       console.log(result);
}
maleMarriageEligibility("male",25,"billgates");
maleMarriageEligibility("male",20,"stewjobs");
console.log("=================================");
function femaleMarriageEligibility(gender,age,girlName){
   var girlresult = gender="female" && age >=18
   ?`hey${girlName} you are eligible for marriage`
   :`${girlName} you are not eligible for marriage`;
   console.log(girlresult);
}
femaleMarriageEligibility("female",17,"sunita");
femaleMarriageEligibility("female",19,"manali");
