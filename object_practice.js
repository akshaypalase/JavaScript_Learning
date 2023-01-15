// object is a non-primitive data type which can hold different type of data in key and value format.
let object_name={
    fname: "akshay",
    lname: "palase",
    age: 25,
    lname: "arun",
   
}
//what are the ways to access properties from an object
console.log(object_name.fname);// first way
console.log(object_name['lname']);// second way
console.log('=====================================================');
//how can we add properties to an object
object_name.city="mumbai";//first way
console.log(object_name);
object_name['ph']=9173033710;
console.log(object_name);//second way
console.log('=====================================================');
// how can we update properties in an object
object_name.fname="tanmay";
console.log(object_name)
console.log('=====================================================');
//how can we delete an property from an object
delete object_name.age;
console.log(object_name)
console.log('=====================================================');


