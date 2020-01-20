

function calculate(x) {
    document.getElementById('result').value += x;
}

function precent(x) {
   let pre1 = (document.getElementById('result').value)*(document.getElementById('result').value)/100;
   document.getElementById('result').value = pre1;
}

function plusMinus(x) {
      document.getElementById('result').value = x-(2*x);
}

function clearWindow(y) {
    document.getElementById('result').value = y;
}

function result() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}



