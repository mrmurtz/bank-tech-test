function Transaction(type, amount, balance){
  if (type == "credit") {
    this._date = moment().format("DD/MM/YYYY");
    this._credit = amount;
    this._debit = 0;
    this._balance = balance;
  }
  else {
    this._date = moment().format("DD/MM/YYYY");
    this._credit = 0;
    this._debit = amount;
    this._balance = balance;
  }
}
