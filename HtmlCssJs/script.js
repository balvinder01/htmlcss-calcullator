function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    const result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
function backspace() {
    const result = document.getElementById('result').value;
    document.getElementById('result').value = result.substr(0, result.length - 1);
}