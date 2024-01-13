let DisplayBox=document.querySelector('.Display-box');
let currentValue='';
function appendValue(v){
  currentValue +=v;
 DisplayBox.value=v;
}
function ClearDisplay(){
  currentValue='';
  DisplayBox.value=' ';
}
// function Calculate(){
//   try{
//     currentValue = eval(currentValue).toString();
//     DisplayBox.value=currentValue;
//   } catch(error){
//     DisplayBox.value='Error';
//   }
// }