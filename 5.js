function canPay(changeArray, totalDue){
                   
  if (changeArray.length === 0) {
     return "you have no balance";
 }

  
  let totalCash = 0;
  for (let i = 0; i < changeArray.length; i++) {
      totalCash += changeArray[i];
  }


  if (totalCash >= totalDue) {
      return true;
  } else {
      return false;
  }
}


// const khuchraTaka = [1, 6, 1]; 
// const chipPrice = 10 ;     
// const canBuyChips = canPay(khuchraTaka, chipPrice);
// console.log(canBuyChips);