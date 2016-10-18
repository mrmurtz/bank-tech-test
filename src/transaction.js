function Transaction(type, amount){
  this._date = new Date();
  this._type = type;
  this._amount = amount;
}
