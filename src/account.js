function Account(initialDeposit, transactionClass){
  this._balance = initialDeposit;
  this._history = new History();
  this._transactionClass = transactionClass;
}

Account.prototype = {

  deposit: function(amount){
    this._balance += amount;
    this._transactionClass = new Transaction("credit", amount, this._balance);
    this._history._history.push(this._transactionClass);
    // return this._transactionClass;
  },

  withdraw: function(amount){
    this._balance -= amount;
    this._transactionClass = new Transaction('debit', amount, this._balance);
    this._history._history.push(this._transactionClass);
    // return this._transactionClass;
  },

  printStatement: function(){
    this._history.print();
  }
};
