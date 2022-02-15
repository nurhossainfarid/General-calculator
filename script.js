function numberDisplay(num) {
    document.getElementById('display').value += num; 
}

function equalOperator() {
    const display = document.getElementById('display');
    const equalCalculation = eval(display.value);
    display.value = equalCalculation;
}
function clr() {
    document.getElementById('result').value = '';
}