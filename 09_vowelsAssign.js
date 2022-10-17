console.log("===========Just log vowels===========");
s1 = "Good Morning IT Champ";
s = s1.length;
c = 0;
for (let i = 0; i < s; i++) {
    A = ['a', 'i', 'o', 'e', 'u']
    x = A.includes(s1[i].toLowerCase());
    if (x == true) {
        c = c + 1;
    }
}
console.log("Total vowels:",c);

console.log('=============================================');

function count(y) {
    s = y.length;
    c = 0;
    for (let i = 0; i < s; i++) {
        A = ['a', 'i', 'o', 'e', 'u']
        x = A.includes(y[i].toLowerCase());
        if (x == true) {
            c = c + 1;
        }
    }
    console.log(c);
}
s1 = "I love Javascript";
count("Total vowels availalble in string",s1);
console.log('=============================================');

sum = function (value) {
    c = 0;
    for (i = 0; i <= value; i++) {
        c = c + i;
    }
    return c;
}
console.log(sum(10));

console.log('=============================================');



sum = function (value) {
    c = 0;
    for (i = 0; i <= value; i++) {
        c = c + i * i;
    }
    return c;
}
console.log(sum(5));


console.log('=============================================');




sum = function (v) {
    c = '';
    for (i = 0; i < v.length; i++) {
        if (v[i] == ' ') {
            //
        } else {
            c = c + v[i]
        }
    }
    return c;
}
s = 'datta is brand';
x = sum(s);
p = ''
for (i = 1; i < x.length; i = i + 2) {
    p = p + x[i]

}
console.log(p)

console.log('=============================================');



sum = function (v) {
    c = '';
    for (i = 0; i < v.length; i++) {
        if (v[i] == ' ') {
            //
        } else {
            c = c + v[i]
        }
    }

    p = ''
    for (i = 1; i < c.length; i = i + 2) {
        p = p + c[i]

    }
    console.log("Odd position Charcters",p)

}
s1 = 'Hard work always pays back';
s2 = 'Soon i will be Angular IT Champ';
x = sum(s1);
x = sum(s2);

console.log('=============================================');


sum = function (v) {
    c = '';
    for (i = 0; i < v.length; i++) {
        if (v[i] == ' ') {
            //
        } else {
            c = c + v[i]
        }
    }

    p = ''
    for (i = 0; i < c.length; i = i + 2) {
        p = p + c[i]

    }
    console.log("Even position Charcters",p)

}
s1 = 'datta is brand';
s2 = 'Soon i will an IT angular champ';
x = sum(s1);
x = sum(s2);