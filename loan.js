let creditLimit = 150;

const loanOut = function(amount) {
  return new Promise((resolve, reject) => {
    if (creditLimit <= 0) {
      reject("Insufficient Funds!");
    } else if (creditLimit < amount) {
      // If credit limit is less than the requested amount
      const approvedAmount = creditLimit;
      creditLimit = 0;
      resolve(approvedAmount);
    } else {
      creditLimit -= amount;
      resolve(amount);
    }
  });
};

console.log("Asking for $150, which should be okay ...");
loanOut(150) 
  .then((amountReceived) => { 
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => { 
    console.log(`\t-> Error: ${err}!`);
  });