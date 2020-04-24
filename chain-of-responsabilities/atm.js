const colors = require('colors')

const MoneyStack = function (billSize) {
  this.billSize = billSize;
  this.next = null;
}

MoneyStack.prototype = {
  CheckNumOfBillsCheckChainAndProceed: function (amount) {
    const numOfBills = Math.floor(amount / this.billSize);

    if (numOfBills > 0) {
      this.PrintNumberOfBills(numOfBills);
      amount -= this.billSize * numOfBills;
    }

    amount > 0 && this.next && this.next.CheckNumOfBillsCheckChainAndProceed(amount);
  },
  
  SetNextStack: function (stack) {
    this.next = stack;
  },

  PrintNumberOfBills: function (numOfBills) {
    console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
  }
}

const ATM = function () {
  const [stack100, stack50, stack20, stack10, stack5, stack1] =
    [
      new MoneyStack(100),
      new MoneyStack(50),
      new MoneyStack(20),
      new MoneyStack(10),
      new MoneyStack(5),
      new MoneyStack(1)
    ];
  
  stack100.SetNextStack(stack50);
  stack50.SetNextStack(stack20);
  stack20.SetNextStack(stack10);
  stack10.SetNextStack(stack5);
  stack5.SetNextStack(stack1);

  this.moneyStacks = stack100
}

ATM.prototype.withdraw = function (amount) {
  console.log(`You asked for $${amount}`.cyan)
  this.moneyStacks.CheckNumOfBillsCheckChainAndProceed(amount);
  console.log('Have a nice day!'.yellow);
}

var atm = new ATM();
atm.withdraw(186);
