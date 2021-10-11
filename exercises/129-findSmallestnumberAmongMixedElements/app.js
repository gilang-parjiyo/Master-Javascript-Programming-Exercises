function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  return arr.reduce((acc, curr) => {
    //set first number value for comparasion
    if (acc === 0 && typeof curr === 'number')
      acc = curr;
    else if (acc > curr)
      acc = curr;
    return acc;
  }, 0)
}

var output = findSmallestNumberAmongMixedElements(['string']);
console.log(output); // --> 4