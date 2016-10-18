function Account(initialDeposit, transactionClass){
  this._balance = initialDeposit;
  this._history = [];
  this._transactionClass = transactionClass;

}

Account.prototype = {
  printStatement: function () {
  console.log( date() + this._balance);
  },

  deposit: function(amount){
    this._transactionClass = new Transaction('deposit', amount);
    this._history.push(this._transactionClass);
    this._balance += amount;
    return this._transactionClass;
  }

};



// helper functions

function date(){
  var date = new Date();
  return date;
};
