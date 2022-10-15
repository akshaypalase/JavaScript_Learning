console.log(`===================Print numbera from 5 to 15 by incrementing 1===================`);
var num=5;
while(num<=15){
      console.log(`number:-${num}`);
      num=num+1;
}
console.log(`===================Print numbera from 50 to 40 by decrementing 1===================`);
var num=50;
while(num>=40){
      console.log(`number:-${num}`);
      num=num-1;
}
console.log(`===================Find first 15 odd numbers===================`);

for(var a=1;a<=30;a++ ){
      console.log(`odd nmuber is:${a}`);
      a=a+1;

} 
console.log(`===================Find first 10 even numbers===================`);
for(var a=0;a<=20;a++ ){
      console.log(`even nmuber is:${a}`);
      a=a+1;
}
console.log(`===================print table of 5===================`)
for(var num=5;num<=50;num=num+5){
      console.log(`table:${num}`);
     
}
console.log(`===================print table of 10===================`)
for(var num=10;num<=100;num=num+10){
      console.log(`table:${num}`);
     
}
console.log(`===================using while loop reverse number from 100 to 10===================`)
var num=100;
while (num>=10) { 
 console.log(`table:${num}`);
      num=num-10;
}
console.log(`===================using for loop reverse number from 100 to 10===================`)
for (let index = 100; index>=10; index=index-10) {
      console.log(`reverse number:${index}`);
      
}