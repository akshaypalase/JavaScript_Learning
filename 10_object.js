let person={
    name:"sachin tendulkar",
    place:"mumbai",
    address: {
        street: "AS CLUB",
        pin_code: 123456,
    }

}
console.log(person);
 let personfullname=person.name;
 console.log(personfullname);
 console.log(person["place"]);
 person.pincode=12345;
person.profession="react developer";
console.table(person);
delete person.place;
console.log(person);