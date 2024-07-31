let opperand1 = "";
let opperand2 = "";
let operator;
let display = 0;
let secondary = false;

const displayContainer = document.querySelector('#display');
displayContainer.textContent = display; 
const numButtons = document.querySelectorAll('.numbers');
numButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        const value = e.target.textContent;
        if(secondary){
            opperand2 += value;
            updateDisplay(opperand2);
        }else {
            opperand1 += value;
            updateDisplay(opperand1);
        }
    })
})

function updateDisplay(newDisplay){
    displayContainer.textContent = newDisplay;
}

function operate(){
    if(operator == '+'){
        display += opperand1 + opperand2;
    }else if(operator == "-"){
        display += opperand1 - opperand2;
    }else if(operator == "/"){
        if(opperand2 === 0){
            display = 'ERROR';
        }else{
            display += opperand1 / opperand2;
        }
    }
}