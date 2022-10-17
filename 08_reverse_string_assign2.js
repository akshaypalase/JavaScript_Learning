function reverse(x){
    s=''
    for(i=x.length;i>=0;i--){
        s=s+x.charAt(i)
    }
    console.log(s)
    
}
s1='Hard work is always psy back'
s2='Soon i will be angular champ'
reverse(s1)
reverse(s2)