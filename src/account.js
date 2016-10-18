function Account(initialDeposit, transactionClass){
  this._balance = initialDeposit;
  this._history = [];
  this._transactionClass = transactionClass;

}

Account.prototype = {

  deposit: function(amount){
    this._balance += amount;
    this._transactionClass = new Transaction('deposit', amount, this._balance);
    this._history.push(this._transactionClass);
    return this._transactionClass;
  },

  withdraw: function(amount){
    this._transactionClass = new Transaction('withdrawal', amount);
    this._history.push(this._transactionClass);
    this._balance -= amount;
    return this._transactionClass;
  },

  printStatement: function(){
    console.log("History:");
    var history = this._history;
    for (var i = 0; i < history.length; i++) {
      console.log(history[i]._date + " || " + history[i]._type + " || " + history[i]._amount + " || " + history[i]._balance);
    }

  }

};
