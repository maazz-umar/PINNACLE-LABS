function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

function appendSymbol(symbol) {
    document.getElementById('display').value += symbol;
}

function calculateResult() {
    let currentValue = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(currentValue);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
