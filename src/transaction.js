function Transaction(type, amount, balance){
  this._date = new Date();
  this._type = type;
  this._amount = amount;
  this._balance = balance
}
