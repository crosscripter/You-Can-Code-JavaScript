let currentInput = '';

function appendNumber(num) {
  currentInput += num;
  document.getElementById('display').value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput);
    document.getElementById('display').value = currentInput;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}