const  tipAmount = document.getElementById("tipAmount");

const totalPerson = document.getElementById("totalPerson");

const billMount = document.getElementById("billMount");

console.log(tipAmount);
console.log(totalPerson);
console.log(billMount);

tipAmount.innerText = getNumero("234");
totalPerson.innerText = getNumero("2123");

console.log(tipAmount);

function getNumero(num){

    num =parseFloat(num).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2});
    return "$ " + num;
}