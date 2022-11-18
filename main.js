const tipAmountLabel = document.getElementById("tipAmount");
const totalPersonLabel = document.getElementById("totalPerson");
const billMountInput = document.getElementById("billMount");
const paxInput = document.getElementById("pax");
const customTipInput = document.getElementById("customTip"); 
const buttonReset = document.getElementById("reset");
const tipInputs = document.querySelectorAll("input[name='tip']");
let bill = 0;
let tip = 0;
let pax = 1;



//----------------ADD event listeners---------------
// --------- Click Reset-----------
buttonReset.addEventListener("click", (e) => {
  billMountInput.value = "";
  paxInput.value = "";
  tipAmountLabel.innerText = "$ 0.00";
  totalPersonLabel.innerText = "$ 0.00";
  customTipInput.value = "";
  document.querySelectorAll("input[name='tip']:checked").forEach((input)=> input.checked = false);

  
    // falta cambiar el estado de click del boton
});
buttonReset.addEventListener("click",e => {
  e.target.blur()});
//-----------Input Bill Mount ---------------
billMountInput.addEventListener("input",updateCalc);
//-----------Input PAX--------------
paxInput.addEventListener("input",updateCalc);
//-----------Input Custom TIP--------------
customTipInput.addEventListener("input",()=>{
  document.querySelectorAll("input[name='tip']:checked").forEach((input)=> input.checked = false);
  updateCalc();
});
//-----------------Input Radius TIP-----------
tipInputs.forEach((tipInput)=>{
  tipInput.addEventListener("change",()=>{
    customTipInput.value = "";
    updateCalc();
  });

});
//--------------End EVENT Listeners-----------

function inputNumberFixed(num){
    formatNum = "";
    
    if(num.length > 12){
      num = num.slice(1);
      num /= 100;
      formatNum = parseFloat(num).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }else if(num.length>2){
      num /= 100;
      formatNum = parseFloat(num).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
  }
    else if(num.length == 1){
        formatNum = "0.0" + num;
    }else{
        formatNum = "0." + num;
    }
    return formatNum;
}
function getInputValues(){
  bill = parseFloat(billMountInput.value.replaceAll(",",""));
  pax = paxInput.value || 1;
  tip = getTip();
}

function getTip(){
  let customTip = customTipInput.value;
  let tipQuery = document.querySelector("input[name='tip']:checked");
  if (customTip != ""){
    customTip = parseFloat(customTip);
    return customTip / 100;
  }else if(tipQuery != null){    
    return tipQuery.value;
  }else{ 
    return 0;
  }
}

function getNumero(num) {
  num = parseFloat(num).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return "$ " + num;
}

function updateCalc(){
  num = billMountInput.value;
  num = num.replace(".","").replaceAll(",","");
  billMountInput.value = inputNumberFixed(num);
  getInputValues();
  let ans = getTotal(bill,tip,pax);
  tipAmountLabel.innerText = getNumero(ans.tipAmount);
  totalPersonLabel.innerText = getNumero(ans.totalPerson);

}


function getTotal(bill = 0, tip, pax){
  let res = {tipAmount:0,totalPerson:0};
  let tipValue = 0;

    if (bill !== 0) {
      tipValue = bill * tip;      
      res.tipAmount = tipValue / pax;
      res.totalPerson = (bill + tipValue) / pax;
      } 
        return res;
}

