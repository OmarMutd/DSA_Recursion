const factorial = (num, i=1) => {
    //base case
    if (num + 1 === i) {
      return 1;
    }
  
    //recursive case 
    return i * factorial(num, ++i)
  }
  console.log(factorial(4))