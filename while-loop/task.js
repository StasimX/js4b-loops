function getReminder(dividend, divider) {
  while (dividend>=divider) {
    dividend=dividend-divider;
  }
  return dividend;
} 

function integerDivision(dividend, divider) {
  var counter = 0;
  while (dividend>=divider) {
    dividend=dividend-divider;
    counter++;
  }
  return counter;
}

//// И я без понятия как: don't use: *, / and %
function getDepositDuration(initialDeposit, monthlyPercent, desiredDeposit) {
  var monthCounter = 0;
  var currentDeposit = initialDeposit;
  while (currentDeposit<desiredDeposit) {
    currentDeposit=currentDeposit+currentDeposit*(monthlyPercent/100);
    monthCounter++;
  }
  return monthCounter;
}
