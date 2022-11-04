console.log(`==================Assignment on Arrow Function================== `);
console.log(`=======================Q.1====================================== `);
let show= () => {
    console.log(`"Good Evening, Today is Sunday"`);

} 
show();
console.log(`======================Q.2======================================== `);
let result = (N1,N2,N3=3) => {
    console.log(`Multiplication of 3 values:-${N1*N2*N3}`);
}
result(5,5,2);
console.log(`==================Q.3=============================================`);
result(10,4);
console.log(`==================Q.4=============================================`);
let add =(A1,A2,A3,A4,A5)=>{
return A1+A2+A3+A4+A5

}
console.log(`"Sum of 5 numbers is:-"${add(100,100,200,349,756)}`);
console.log(`"concatenation:-"${add("I am","learning","ES6","Features","in depth")}`);


