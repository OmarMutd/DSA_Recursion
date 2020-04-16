const fibonacci = (fNum, num1=0, num2=0, i=1) => {
    if (fNum + 1 === i) {
      return '';
    }
    if (i === 1) {
      num1 = 0;
      return num1 + fibonacci(fNum, num1, 1, i + 1)
    }
    if (i === 2) {
      num2 = 1;
      return `, ${num2}` + fibonacci(fNum, 1, num2, i + 1)
    }
    let num3 = num1 + num2;
    return `, ${num3}` + fibonacci(fNum, num2, num3, i + 1)
  }
  console.log(fibonacci(10));