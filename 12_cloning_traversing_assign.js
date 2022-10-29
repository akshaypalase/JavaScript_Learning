console.log("=====================Assignment1=====================");
console.log("----------------------------Q.1----------------------------");
let bank_sbi = {
    bankName: "SBI",
    account_holder: "Akshay palase",
    branch: "Mira road",
    staff: 20
}
console.log(bank_sbi);
console.log("----------------------------Q.2----------------------------");
let bank_location = {
    street: "SHOP NO.23 TO 28, SHANTI PLAZA, Sector 11, Shanti Nagar, Mira Road, Maharashtra 401107",
    city: "Thane",
    pin_code: "401107"
}
console.log(bank_location);
console.log("----------------------------Q.3----------------------------");
console.log(`---------------Clone Objects by Using Object.assign()--------------`);

let cloned_bank_sbi = Object.assign({}, bank_sbi);
console.log(`Bank Name:- ${cloned_bank_sbi.bankName}, account_holder_Name:- ${cloned_bank_sbi.account_holder}, branch:- ${cloned_bank_sbi.branch}, No.of staff:- ${cloned_bank_sbi.staff}`);

let sbi_bank = Object.assign({}, bank_location);
console.log(`Street:- ${sbi_bank.street}, City:- ${sbi_bank.city}, Pin_code:- ${sbi_bank.pin_code}`);

console.log(`---------------Clone Objects by Using "Spread Operator"--------------`);

let clone_bank_sbi = { ...bank_sbi };
console.log(`Bank Name:- ${cloned_bank_sbi.bankName}, account_holder_Name:- ${cloned_bank_sbi.account_holder}, branch:- ${cloned_bank_sbi.branch}, No.of staff:- ${cloned_bank_sbi.staff}`);

let locationClone = { ...bank_location };
console.log(`Street:- ${locationClone.street}, City:- ${locationClone.city}, Pin_code:- ${locationClone.pin_code}`);

console.log("----------------------------Q.4----------------------------");
let rate_of_interest = {
    home_loan_interest: "11.5%",
    personal_loan_interest: "13%",
    due_interest: "7.80%"
}
console.log(rate_of_interest);
console.log("----------------------------Q.5----------------------------");
let sbi_details = Object.assign(bank_sbi, bank_location, rate_of_interest);
console.log(`Merged All Object in New Object->`);
console.table(sbi_details);
/*let sbi_details={...bank_sbi, ...bank_location, ...rate_of_interest};
console.log(`Merged All Object in New Object->`);
console.table(sbi_details);*/
console.log("----------------------------Q.6----------------------------");
console.log(`"Traverse the Merged Object"`);
for (const key in sbi_details) {
    const element = sbi_details[key];
    console.log(`${key} :${element}`);
}