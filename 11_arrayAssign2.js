console.log("===================Assignment-2===================");
console.log("---------------------Q.1--------------------");
const array_numbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(array_numbers);
console.log("Length of Given Array is:-",array_numbers.length);
 console.log("---------------------Q.2--------------------");
 console.log(array_numbers);
 console.log("First Element is:-",array_numbers[0]);
  console.log("Last Element is:-",array_numbers[array_numbers.length-1]);
  console.log("---------------------Q.3--------------------");
  console.log(array_numbers);
  console.log("Third last Element is:-",array_numbers[array_numbers.length-3]);
  console.log("---------------------Q.4--------------------");
  const evens = [];
  for (const num of array_numbers) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  console.log("all even numbers:-",evens);
  console.log("---------------------Q.5--------------------");
  const odd= [];
  for (const num of array_numbers) {
    if (num % 2 === 1) {
      odd.push(num);
    }
  }
  console.log("all odd numbers:-",odd);
  console.log("---------------------Q.6--------------------");
  for(i=0;i<array_numbers.length;i=i+2){
    console.log("Even Positioned Element of Array:-",array_numbers[i]);
}
console.log("---------------------Q.7--------------------");
var len=array_numbers.length;

 for(i=0;i<len;i=i+2){
     console.log("Odd Positioned Element of Array:-",array_numbers[i]);
 }
 console.log("---------------------Q.8--------------------");
 let sum = 0;

for (let i = 0; i < array_numbers.length; i++) {
    sum += array_numbers[i];
}

console.log("Sum of All Array Numbers is:-",sum);
console.log("---------------------Q.9--------------------");
for(let index=0;index<len;index++){
  if(array_numbers[index]%5==0)
  {
    console.log(`Multiple of 5:-`,array_numbers[index]);
  }
}

console.log("---------------------Q.10--------------------");
console.log(array_numbers);
console.log("115 is Available in Array:-",array_numbers.includes(115));
console.log("---------------------Q.11--------------------");
console.log(array_numbers);
console.log("23 is Available in Array:-",array_numbers.includes(23));