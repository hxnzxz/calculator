let opperand1 = "";
let opperand2 = "";
let operator = null;
let display = 0;
let secondary = false;
let hax = false;

const displayContainer = document.querySelector('#display');
displayContainer.textContent = display; 

const equals = document.querySelector('#eq');
equals.addEventListener('click', () => {
    if(operator == null || opperand2 === ""){
        if(opperand1 !== ""){
            updateDisplay(opperand1);
        }
    }else{
        operate();
        updateDisplay(display);
        opperand2 = "";
        if(hax){
            hax = false;
            display = 0;
        }
    }
})

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    opperand1 = "";
    opperand2 = "";
    operator = null;
    display = 0;
    secondary = false;
    updateDisplay(display);
})
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
const operatorButtons = document.querySelectorAll('.operators');
operatorButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if(operator !== null){
            equals.click();
        }
        secondary = true;
        operator = e.target.textContent;
        // updateDisplay(displayContainer.textContent + operator);
    })
})

function updateDisplay(newDisplay){
    displayContainer.textContent = newDisplay;
}

function operate(){
    switch(operator){
        case "+":
            opperand1 = +opperand1 + +opperand2;
            opperand1 = opperand1.toString();
            display = opperand1;
            break;
        case "-":
            opperand1 = +opperand1 - +opperand2;
            opperand1 = opperand1.toString();
            display = opperand1;
            break;
        case "/":
            if(opperand2 ==='0'){
                display = 'DENIED';
                opperand1 = "";
                operator = null;
                hax = true;
            }else{
                opperand1 = +opperand1 / +opperand2;
                opperand1 = Math.round((opperand1 + Number.EPSILON) * 100) / 100;
                opperand1 = opperand1.toString();
                display = opperand1;
            }
            break;
        case "*":
            opperand1 = +opperand1 * +opperand2;
            opperand1 = opperand1.toString();
            display = opperand1;
            break;
    }   


}