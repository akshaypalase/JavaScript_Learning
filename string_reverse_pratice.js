//reverse string  function and  for loop
var str="TCS the Indian IT Giant company";
function reverse(x){
    s=''
    for(i=x.length;i>=0;i--){
        s=s+x.charAt(i)
        }
        console.log(s)
}
var s1="TCS the Indian IT Giant company";
reverse(s1);

//reverse string using split,reverse,join
var str="TCS the Indian IT Giant company";
var newstr=str.split('');
console.log(newstr.reverse().join(''));

//reverse string using for loop
var s="TCS the Indian IT Giant company";
var a=''
for (let index =s.length-1; index >= 0; index--) {
    a += s[index];
}
console.log(a);

