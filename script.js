
let resultfield = "";
let previousResult = 0;
let operation = "";
let [numberArea, readings] = [
    document.getElementById("number-area"),
    document.getElementById("readings"),
];

let evaluate = (event) => {
    let keyID =''; 
    let keyFlag = false;
    keyFlag = event.keyCode;
    readings.style.color = "white";
    console.log(event.keyCode);
    if (event.target.id === "one" || event.keyCode === 49) {
        resultfield += "1";
        keyID = "one";
    } else if (event.target.id === "two" || event.keyCode === 50){
        resultfield += "2";
        keyID = "two";
    }
    else if (event.target.id === "three" || event.keyCode === 51){
        resultfield += "3";
        keyID = "three";
    }
    else if (event.target.id === "four" || event.keyCode === 52){
        resultfield += "4";
        keyID = "four";
    }
    else if (event.target.id === "five" || event.keyCode === 53){
        resultfield += "5";
        keyID = "five";
    }
    else if (event.target.id === "six" || event.keyCode === 54){
        resultfield += "6";
        keyID = "six";
    }
    else if (event.target.id === "seven" || event.keyCode === 55){
        resultfield += "7";
        keyID = "seven";
    }
    else if (event.target.id === "eight" || event.keyCode === 56){
        resultfield += "8";
        keyID = "eight";
    }
    else if (event.target.id === "nine" || event.keyCode === 57){
        resultfield += "9";
        keyID = "nine";
    }
    else if (event.target.id === "zero" || event.keyCode === 48){
        resultfield += "0";
        keyID = "zero";
    }
    else if (event.target.id === "clear" || event.keyCode === 67) {
        resultfield = "";
        keyID = "clear";
    } else if (event.target.id === "backspace" || event.keyCode === 8) {
        resultfield = resultfield.slice(0, -1);
        keyID = 'backspace';
    } else if (event.target.id === "divide") {
        operation = "/";
        previousResult = Math.floor(parseInt(resultfield));
        resultfield = "";
        keyID = "divide";
    } else if (event.target.id === "multiply") {
        operation = "*";
        previousResult = Math.floor(parseInt(resultfield));
        resultfield = "";
        keyID = "multiply";
    } else if (event.target.id === "subtract") {
        operation = "-";
        previousResult = Math.floor(parseInt(resultfield));
        resultfield = "";
        keyID = "subtract";
    } else if (event.target.id === "add") {
        operation = "+";
        previousResult = Math.floor(parseInt(resultfield));
        resultfield = "";
        keyID = "add";
    } else if (event.target.id === "equal"|| event.keyCode === 187) {
        if(resultfield === "") {
            return;
        }
        else{
            previousResult = calculate(operation);
            resultfield = previousResult;
            operation = "";
            keyID = "equal";
        }
    }
    if (!resultfield) readings.style.color = "rgba(241, 238, 238, 0.671)";
    if(keyID && keyFlag){
        // animate keyID to scale 1.05
        let key = document.getElementById(keyID);
        key.style.transform = "scale(1.05)";
        setTimeout(() => {
            key.style.transform = "scale(1)";
        }, 100);
    }
    readings.innerHTML = resultfield || "Results";
};

let calculate = (operation) => {
    if (operation === "+") return previousResult + parseInt(resultfield);
    else if (operation === "-") return previousResult - parseInt(resultfield);
    else if (operation === "*") return previousResult * parseInt(resultfield);
    else if (operation === "/") return previousResult / parseInt(resultfield);
};
document.addEventListener("keydown", evaluate);
numberArea.addEventListener("click", evaluate);



