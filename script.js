let displayValueInput = document.querySelector(".display-value-input")
let inputsContainer = document.querySelector(".inputs-container")


displayValueInput.disabled = true;
inputsContainer.addEventListener("click", (e) => {

    if (e.target.value == "=" || e.target.value == "AC" || e.target.value == "DE" || e.target.value == undefined) {
        if (e.target.value == "AC") {
            displayValueInput.value = "";
        }
        if (e.target.value == "DE") {
            console.log(displayValueInput.value.slice(0, -1))
            let newVal = displayValueInput.value.slice(0, -1);
            displayValueInput.value = newVal;
        }
        if (e.target.value == "=") {
            displayValueInput.value = eval(displayValueInput.value)
        }
    }
    else {
        displayValueInput.value += e.target.value;

    }
})