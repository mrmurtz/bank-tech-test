function Account(initialDeposit, transactionClass){
  this._balance = initialDeposit;
  this._history = [];
  this._transactionClass = transactionClass;

}

Account.prototype = {

  deposit: function(amount){
    this._balance += amount;
    this._transactionClass = new Transaction("credit", amount, this._balance);
    this._history.push(this._transactionClass);
    // return this._transactionClass;
  },

  withdraw: function(amount){
    this._balance -= amount;
    this._transactionClass = new Transaction('debit', amount, this._balance);
    this._history.push(this._transactionClass);
    // return this._transactionClass;
  },

  printStatement: function(){
    console.log("History:");
    console.log("Date       ||" + " Credit   || " + "  Debit   ||" + "  Balance   ||");
    var history = this._history;
    for (var i = 0; i < history.length; i++) {
      console.log(history[i]._date + " || " + history[i]._credit + " || " + history[i]._debit + " || " + history[i]._balance);
    }
  }
};
