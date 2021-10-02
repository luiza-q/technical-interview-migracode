// Create a website that contains (at least) a button and a text showing the number of times I clicked the button. Every time I click on the button the counter is increased by one.

// Example: https://valera-rozuvan.github.io/online-counter/



const decreaseButton = document.getElementById("decrease-btn");
const increaseButton = document.getElementById("increase-btn");

function increaseNumber(){
    const counterNumber = document.querySelector('input');
    counterNumber.value = parseInt(counterNumber.value) + 1;
}

function decreaseNumber(){
    const counterNumber = document.querySelector('input');
    counterNumber.value = parseInt(counterNumber.value) - 1;
}


function addNumber(number){
    const counterNumber = document.querySelector('input');
    if(!counterNumber.value) {
        counterNumber.value = parseInt(number);
    } else {
        counterNumber.value = parseInt(counterNumber.value) + number;
    }
}

increaseButton.addEventListener("click", () => addNumber(+1));
decreaseButton.addEventListener('click', () => addNumber(-1));