const tipAmount = document.getElementById("tipAmount");

const totalPerson = document.getElementById("totalPerson");

const billMount = document.getElementById("billMount");
//----------------ADD event listeners---------------

document.getElementById("reset").addEventListener("click", () => {
    billMount.value = "";
    getTotal();
    // falta cambiar el estado de click del boton
});

billMount.addEventListener("input",() => console.log(getTotal("")));

function getNumero(num) {
  num = parseFloat(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return "$ " + num;
}

// obtener % de tip

// Event listener para cambio de people


function getTotal(bill, tip, pax){
    if (bill !== "") {

        totalPerson.innerText = getNumero(billMount.value);
      } else {
        return{tipAmount:getNumero("0"), totalPerson:getNumero("0")}
      }

}


// function getTotal(bill, tip, pax){
//     if (billMount.value !== "") {

//         totalPerson.innerText = getNumero(billMount.value);
//       } else {
//         totalPerson.innerText = getNumero("0");
//         tipAmount.innerText = getNumero("0");
//       }

// }