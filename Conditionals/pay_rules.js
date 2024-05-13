import createPrompt from 'prompt-sync';
let prompt=createPrompt();

let payRate = prompt('Enter payRate:');
let hoursWorked = prompt('Enter hours worked:');

let amountPaid = 0;

if (hoursWorked > 40) {
   amountPaid = 40*payRate + (hoursWorked - 40)*1.5*payRate;
}
else {
    amountPaid = payRate*hoursWorked;
}
console.log(`Amount Paid is ${amountPaid}`)

