var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  if (customerData.hasOwnProperty(firstName)) {
    let customerVisit = customerData[firstName].visits;
    switch (true) {
      case customerVisit === 1:
        greeting = `Welcome back, Joe! We're glad you liked us the first time!`
        break;
      case customerVisit > 1:
        greeting = `Welcome back, Carol! So glad to see you again!`
        break;
    }
  } else greeting = 'Welcome! Is this your first time?'


  // your code here


  return greeting;
}

console.log(greetCustomer('Joee'));
