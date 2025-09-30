let userInput = prompt("Input number");

let number = parseInt(userInput, 10);

if (isNaN(number)) {
    alert("Invalid input");
} else {
    if (number === 0) {
        alert("zero integer number");
    } else if (number % 2 === 0) {
        alert("even integer number");
    } else {
        alert("odd integer number");
    }
}
