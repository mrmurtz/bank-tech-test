#Bank Tech test

![alt tag](https://github.com/mrmurtz/bank-tech-test/blob/master/public/giphy.gif)

My solution for the bank tech test in week 10 of Makers Academy.

- Language: JavaScript
- Testing framework: Jasmine

###Solution

- Account - holds the balance
- History - holds a transaction history and print function
- Transaction - creates instances of credit/debit transactions

---

###Run tests

Open `SpecRunner.html`

---

###Initial Requirements

Deposits, withdrawal
Account statement (date, amount, balance)
Statement printing
Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

###Additional extensions

Statement filters (just deposits, withdrawals, date ascending, date descending)
Graphical interface
