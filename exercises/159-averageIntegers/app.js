function average(num1, num2) {
  // process array of numbers
  let array = Array.from(arguments);
  return sum(num1, num2) / array.length;

}

function sum(numbers) {
  let array = Array.from(arguments)
  return array.reduce((a, b) => a + b);
}

console.log(average(4, 5));