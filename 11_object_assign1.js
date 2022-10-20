console.log("===================ASSIGNMENT-Object===================");
let teacher={
    Name:"Mr.Gajanan(sir)",
    age:34,
    subject:"HTML,CSS,Javascript",
    Gender:"Male",
    degrees:{
        SSC:"10-Marathi Medium",
        HSC:"12-Science",
        Engineering:"CSC",
        MTECH:"M-tech-Al and Data SCience",
        PHD:"Adv Computing"
    },
    certificates:{
        certificate1:"Hacker Rank Participation",
        certificate2:"Certificate in Adv-Programming",
        certificate3:"Certificate in IFE"
    },
    value:function(){
        let teacher=`Teacher Total Degrees are:${this.degrees.SSC},${this.degrees.HSC},${this.degrees.Engineering},${this.degrees.MTECH},${this.degrees.PHD}`;
        return teacher;
    }
}
console.log("-----------------------------Q.1---------------------------");
console.log(teacher);
console.log("-----------------------------Q.2---------------------------");
console.log(teacher.degrees);
console.log("-----------------------------Q.3---------------------------");
console.log(teacher.certificates);
console.log("-----------------------------Q.4---------------------------");
let tDetail=teacher.value();
console.log(tDetail);
console.log("-----------------------------Q.5---------------------------");
console.log("----------Addition new property----------");
teacher.profession=`profession:-"React Developer"`;
console.log(teacher.profession);
console.log("-----------------------------Q.6---------------------------");
console.log("----------Modify existing property----------");
teacher.Name=`Updated Full Name:-"Mr. Gajanan Kharat (Sir)"`;
console.log(teacher.Name);
console.log("-----------------------------Q.7---------------------------");
console.log("--------------------Before Delete---------------------------");
console.log(teacher.certificates);
console.log("--------------------After Delete---------------------------");
delete teacher.certificates.certificate3;
console.log(teacher.certificates);
console.log("-----------------------------Q.8---------------------------");
console.log("--------------------Before Adding New Certificate---------------------------");
console.table(teacher.certificates);
console.log("--------------------After Adding New Certificate---------------------------");
teacher.certificates.certificate3="Internet of Things";
console.table(teacher.certificates);
console.log("-----------------------------Q.9---------------------------");
console.table(teacher.certificates);