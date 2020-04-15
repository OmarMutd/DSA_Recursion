const powercalculator = function(base, exponent) {
if (exponent < 0) {
    return 'exponent should be greater than 0'
}
if (exponent === 0) {
    return 1;
}
exponent = exponent - 1
return base * powercalculator(base, exponent)
}

console.log(powercalculator(2,2))