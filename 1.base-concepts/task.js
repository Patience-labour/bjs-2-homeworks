"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  arr = discriminant;
  
  if (discriminant < 0) {
    return [];
} else if (discriminant === 0) {
    let x1 = -b / (2 * a);
    return [x1];
} else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    return [x1], [x2];
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = percent / 12 / 100;
    let bodyLoan = amount - contribution;
    let pay = bodyLoan * (monthlyPercent + (monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1)));
    let total = pay + countMonths;
    let roundOff = total.toFixed(2);

    return roundOff;
}