const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`-------------------Reverse array-----------------------`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`sort()method without custom sorting logic`);
array_roll_numbers.sort();
console.log(array_roll_numbers)
//sort the array in ascending order by writing your custom logic
array_roll_numbers.sort((a,b)=>{
    return a>b ? 1 : -1;
});
console.log(array_roll_numbers);
//find the greatest number from the array
const max=Math.max(...array_roll_numbers);
console.log(max)
//find the smallest number from the array
const min=Math.min(...array_roll_numbers);
console.log(min)
//Remove duplicates from array
const array_roll_new= [... new Set(array_roll_numbers)];
console.log(array_roll_new)

