console.log("Calculator Exercise");

var firstNum = document.getElementById("number1");
var secondNum = document.getElementById("number2");

var plusbtn = document.getElementById("plus");
var minusbtn = document.getElementById("minus");
var timesbtn = document.getElementById("times");
var dividebtn = document.getElementById("divide");

var total = document.getElementById("output");

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

var addingNumbers = function sumTotal(firstNum, secondNum){
  return (firstNum + secondNum);
};

function addButton(){
  sum = addingNumbers(parseInt(firstNum.value), parseInt(secondNum.value))
  total.innerHTML = sum;
};

plusbtn.addEventListener("click", addButton);
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */

var subtractNumbers = function differenceTotal(firstNum, secondNum){
	return (firstNum - secondNum);
};

function subtractButton(){
	difference = subtractNumbers(parseInt(firstNum.value), parseInt(secondNum.value))
	total.innerHTML = difference;
};

minusbtn.addEventListener("click", subtractButton);
// /*
//   Create a function that multiplies two numbers
//   passed in as arguments. Return the product.
//  */

var multiplyNumbers = function productTotal(firstNum, secondNum){
  return (firstNum * secondNum);
};

function multiplyButton(){
  product = multiplyNumbers(parseInt(firstNum.value), parseInt(secondNum.value))
  total.innerHTML = product;
};

timesbtn.addEventListener("click", multiplyButton);

// /*
//   Create a function that divides two numbers
//   passed in as arguments. Return the quotient.
//  */

var divideNumbers = function quotientTotal(firstNum, secondNum){
  return (firstNum / secondNum);
};

function divideButton(){
  quotient = divideNumbers(parseInt(firstNum.value), parseInt(secondNum.value))
  total.innerHTML = quotient;
};

dividebtn.addEventListener("click", divideButton);

//   Create a function that accepts three arguments.
//     1. First number
//     2. Second number
//     3. A function that performs an operation on them

//   Return the value of the operation.

function calculateThis(num1, num2, func){
	return func(num1, num2);
}