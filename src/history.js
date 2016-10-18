function History(){
  this._history = [];
}

History.prototype.print = function () {
  console.log("History:");
  console.log("Date       ||" + " Credit  || " + " Debit  ||" + " Balance  ||");
  var history = this._history;
  for (var i = 0; i < history.length; i++) {
    console.log(history[i]._date + " || " + history[i]._credit.toFixed(2) + " || " + history[i]._debit.toFixed(2) + " || " + history[i]._balance.toFixed(2));
  }
};
