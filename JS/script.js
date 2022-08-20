const singlePhonePrice = 1219;
const singtleCasePrice = 59;
let newQuantity;

function itemQuantityWithPrice(inputField,isIncreaseQuantity,phoneOrCase,price){
    const quantityField = document.getElementById(inputField);
    let previousQuantity = Number(quantityField.value);
    

    if(isIncreaseQuantity){
        newQuantity = previousQuantity + 1;
    }else{
        newQuantity = previousQuantity - 1;
    }
    quantityField.value = newQuantity;

    const priceCalculation = document.getElementById(phoneOrCase);
    let previousPrice = Number(priceCalculation.innerText);
    if(newQuantity >= 0){
      let newPrice = newQuantity * price;
      priceCalculation.innerText = newPrice
    }else{
      priceCalculation.innerText = previousPrice;
      quantityField.value = previousQuantity
    }
    

  
}

function fullPrice(itemPrice){
    let fullPrice = document.getElementById('subTotalPrice');
    previousSubTotalPrice = Number(fullPrice.innerText);

    if(newQuantity >= 0){
      newSubTotalPrice = previousSubTotalPrice + itemPrice;
      fullPrice.innerText = newSubTotalPrice;
    }else{

      fullPrice.innerText = previousSubTotalPrice;
    }
    

    

    let tax = document.getElementById('tax');
    newTaxAmount = Number(((newSubTotalPrice * 1.5)/100).toFixed(2));
    tax.innerText = newTaxAmount;

    let totalPrice = document.getElementById('totalPrice');
    totalPrice.innerText = newSubTotalPrice + newTaxAmount;
    
}
//Phone Cart

document.getElementById('btnPhonePlus').addEventListener('click',function(){
   itemQuantityWithPrice('phoneQuantity',true,'phonePrice',singlePhonePrice);
  fullPrice(singlePhonePrice);
})

document.getElementById('btnPhoneMinus').addEventListener('click',function(){
    itemQuantityWithPrice('phoneQuantity',false,'phonePrice',singlePhonePrice);
  fullPrice(-singlePhonePrice);
})



//Case Cart

document.getElementById('btnCasePlus').addEventListener('click',function(){
  itemQuantityWithPrice('caseQuantity',true,'casePrice',singtleCasePrice);
fullPrice(singtleCasePrice);

})

document.getElementById('btnCaseMinus').addEventListener('click',function(){
  itemQuantityWithPrice('caseQuantity',false,'casePrice',singtleCasePrice);
fullPrice(-singtleCasePrice);
})



let removeItem = document.querySelectorAll('.remove-item');
let undoBtn = document.getElementById('undoBtn');
for(keys of removeItem){
  keys.addEventListener('click',function(event){
   let removeParent =  event.target.parentNode.parentNode.parentNode;
   removeParent.style.display = 'none';
    undoBtn.style.display = 'block';
    undoBtn.addEventListener('click',function(){
      removeParent.style.display = 'block';
      undoBtn.style.display = 'none';
    })
})
};

