function Transaction(type, amount, balance){

  var date = moment().format("DD/MM/YYYY");

  if (type == "credit") {
    this._date = date;
    this._credit = amount;
    this._debit = 0;
    this._balance = balance;
  }
  else {
    this._date = date;
    this._credit = 0;
    this._debit = amount;
    this._balance = balance;
  }
}
