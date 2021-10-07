function add(p1, p2) {
    return p1 + p2;
  }

  function subtract(p1, p2) {
    return p1 - p2;
  }

  function multiply(p1, p2) {
    return p1 * p2;
  }

  function divide(p1, p2) {
    return p1 / p2;
  }

  add(1 + 80); //=> 81
  subtract(60 - 40); //=> 20
  multiply(2 * 3.4); //=> 6.8
  divide(5.0 / 2.5); //=> 2

  //reset number
  number = 10; 
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}

//reset number

number = 2.345

function makeInt(n){
    parseInt(n, 10);
}

//reset number
n = 80.123999

function makeInt(n) {
    return parseInt(n, 10);
}

//reset number
n = 80.123999

function preserveDecimal(n) {
    return parseFloat(n, "yay");
}