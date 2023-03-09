/*__________ set golobal variable start ______________*/ 
/* ---------- add button part start --------*/    
// get inputField
const addInputField= document.getElementById('add-field')
/*---------- add button part end --------*/ 

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

// remove item
function removeItem(){
    // console.log('Bnt clicked is working or not')
    // step-1:
    const itemList = document.getElementById('item-list')
    let li = document.querySelector("li:last-child");
    itemList.removeChild(li)
}

// changeColor part
function changeColor(){
    // get inputfield
    const colorInputField= document.getElementById('color-field')
    colorInput = colorInputField.value;
    colorInputField.value='';
    // 
    const List= document.querySelectorAll('li')
    for(let i=0; i< List.length; i++){
        // console.log(i)
        // console.log(List[i])
        List[i].style.color= colorInput;
    }
}



// hide/show list
function toggleButton(){
    const listDiv= document.getElementById('list-div')
   const toggle = document.getElementById("toggle-button");

    if(listDiv.classList.contains('d-none')){
        listDiv.classList.remove("d-none");
        toggle.textContent = "Show-List";
    }
    else{
        listDiv.classList.add("d-none");
        toggle.textContent = 'Hide-List'
    }
}