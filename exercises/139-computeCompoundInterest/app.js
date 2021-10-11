function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here

  const amount = principal *
    (Math.pow((1 + interestRate / compoundingFrequency),
      (compoundingFrequency * timeInYears)));

  return amount - principal;
}

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.83682213410543


/*
{\displaystyle P'=P\left(1+{\frac {r}{n}}\right)^{nt}}
where:

P=P(1 +  r / n) nt

P is the original principal sum
P' is the new principal sum
r is the nominal annual interest rate
n is the compounding frequency
t is the overall length of time the interest is applied (expressed using the same time units as r, usually years).
*/