function calculateSum() {
    // We check if the element exists first to avoid the 'null' error
    const inputElement = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');

    if (!inputElement) {
        console.error("Could not find the input with ID 'numberInput'");
        return;
    }

    const n = parseInt(inputElement.value);

    if (isNaN(n)) {
        resultDiv.innerText = "Please enter a number.";
        return;
    }

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    resultDiv.innerText = "The sum is: " + sum;
}
