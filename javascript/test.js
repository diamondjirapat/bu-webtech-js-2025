let userInput = prompt("Input number");

let number = parseInt(userInput, 10);

if (isNaN(number)) {
    alert("Invalid input");
} else {
    if (number === 0) {
        alert("zero");
    } else if (number % 2 === 0) {
        alert("even number");
    } else {
        alert("odd number");
    }
}
