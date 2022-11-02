console.log("======================== Array for removing duplicate elements========================");
let arrayOfNames=["Kamat", "Memon", "Nashpati", "Taimur", "Menon", "Kamat", "Andy", "Taimur"];
console.log(`Given Array:-`,arrayOfNames);
console.log("======================== after removing duplicate elements from array ==================");
let uniqueArray = [...new Set(arrayOfNames)];
console.log(uniqueArray);
let setNo=new Set();
let count=0;
for (const i of arrayOfNames) {
    setNo.add(i);
    count=count+1;
}
(setNo);

console.log("========================Count of duplicate element========================");
console.log("count of duplicate element given array is:-", arrayOfNames.length-setNo.size);

let a=uniqueArray.length;
console.log(`========================Total no of unique element from Array========================`);
console.log(`Total no of unique element from Array:-`, a);