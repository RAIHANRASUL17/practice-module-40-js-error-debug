/*__________ set golobal variable start ______________*/ 
/*_---------- add button part start --------*/    
// get inputField
const addInputField= document.getElementById('add-field')
/*_---------- add button part end --------*/   
/*__________ set golobal variable end   ______________*/ 

function addItem(){
const addInput=addInputField.value;
addInputField.value= ''
// step-1
const itemList = document.getElementById('item-list')
//step-2 create li 
const li =document.createElement('li');
li.innerText= addInput;
//step-3 set innerText
itemList.appendChild(li);
}