console.log("==========Assignment-> Array Of Objects==============")
class Bank {
    constructor(bank_name, location, account_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
let sbi_bank = new Bank("SBI Bank", "Mumbai", 332211, "SBI0234", "10%");
let icici_bank = new Bank("ICICI Bank", "Thane", 987654, "ICICI0456", "5.8%");
let axis_bank = new Bank("AXIS Bank", "Mira road", 456789, "AXIS0987", "6.8%");
let kotak_bank = new Bank("KOTAK Bank", "Borivali", 112233, "KTK0321", "9.5%");
let punjab_bank = new Bank("PUNJAB Bank", "Dahisar", 002233, "PNB0654", "8.7%");
let hdfc_bank = new Bank("HDFC Bank", "Dadar", 445566, "HDFC0143", "7.7%");



const array = [sbi_bank, icici_bank, axis_bank, kotak_bank, punjab_bank, hdfc_bank];

console.log(`==========================="Bank Name and Location"=============================`);

for (const a of array) {
    console.log(`Bank Name:- ${a.bank_name} & Location:- ${a.location}`);
}
console.log(`==========================="Kotak Bank Details"==================================`);

for (const b of array) {
    if (b.bank_name == "KOTAK Bank") {
        console.log(`Bank Name:- ${b.bank_name}, Location:- ${b.location}, Account Number:- ${b.account_no}, IFSC:- ${b.ifsc}, Interest Rate:- ${b.interest_rate}`);
    }
}

console.log(`==========================="All Bank Details"==================================`);

for (const c of array) {
    console.log(`Bank Name:- ${c.bank_name}, Location:- ${c.location}, Account Number:- ${c.account_no}, IFSC:- ${c.ifsc}, Interest Rate:- ${c.interest_rate}`);
}
