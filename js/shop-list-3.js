
function addItem(){
    // console.log('set onclick add button is working or not , check')
    // get inputField
    const addInputField= document.getElementById('add-field')
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