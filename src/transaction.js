function Transaction(type, amount, balance){
  this._date = moment().format("DD/MM/YYYY");
  this._type = type;
  this._amount = amount;
  this._balance = balance;
}
