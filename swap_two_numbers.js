//swap two numbers without using third variable
var a=100;
var b=200;
console.log('before swapping:-',a,b);
a=a+b;
b=a-b;
a=a-b;
console.log('after swapping:-',a,b);

//swap two numbers with using third variable
var m=11 , n=12;
console.log('before swapping:-',m,n);

var temp=m;
m=n;
n=temp;
console.log('after swapping:-',m,n);

