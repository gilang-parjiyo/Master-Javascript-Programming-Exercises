function findLongestPalindrome(sentence) {

  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
  sentence = sentence.replace(',', '');
  let polindorm = sentence.split(/\s|,/g).filter(item => isPalindrome(item.toLowerCase()));
  polindorm = polindorm.sort((a, b) => b.length - a.length)[0];
  return polindorm;

}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  return reverseString(word) === word; 
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

console.log(findLongestPalindrome('oNo madam, ono Madam'));