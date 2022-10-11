//write a function Expression to get square of number
console.log("============First Question================");
var square=function(value1)
{
    console.log("Square of",value1,":-",value1*value1);
}
square(5);
square(6);
square(25);
square(100);



//check and log type function
console.log("===============Second Question===================");
console.log(typeof(square));


//write a function expression to calculate the area of triangle.Given ---->base=45 heigth=34
console.log("============Third Question============");
var tri=function(base,height)
{
    return 0.5*base*height;
}
console.log("Area of triangle=",tri(45,34));


//write a function expression to calculate the area of rectangle land[length =499 width=917]
console.log("=============Fourth Question===============");
var result=function(length,width)
{
    console.log("area of rectangle land=",length*width);
}
result(499,917);

//write a function expression with two arg and should be swap the passed values and log on console before swap abd after swap values inside function itself.
console.log("==============Fifth Question==============");
var swap_values=function(value1,value2)
{
    console.log("before the swapping:-",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("after the swapping",value1,value2);
}
swap_values("virat","Anushka");
swap_values(1000,2000);