let DisplayValue=document.querySelector('.Display-box');
function TakeValue(value){
  DisplayValue.value=value;
}
function Value(){
return DisplayValue.value
}

function Add(){
let sum= Value() + Value();
console.log(sum);
DisplayValue.value = sum;
}