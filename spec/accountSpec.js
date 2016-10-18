describe("BankAccount", function() {

    beforeEach(function() {
      account = new Account(2000);
    });

    afterEach(function() {
      account = new Account(2000);
    });


    describe("initial deposit when created", function(){
      it("can hold a balance of £2000", function(){
        expect(account._balance).toEqual(2000);
      });
    });

    describe("deposit", function(){
      it("increase the balance by the amount passed in", function(){
        account.deposit(200);
        expect(account._balance).toEqual(2200);
      });

      it("creates a new transaction with deposit and amount as arguments", function(){
        account.deposit(200);
        expect(account._transactionClass).toBeDefined();
      });

      it("adds the transaction into account history", function(){
        account.deposit(200);
        expect(account._history._history.length).toBe(1);
      });
    });

    describe("withdraw", function(){
      it("reduces the balance by the amount passed in", function(){
        account.withdraw(200);
        expect(account._balance).toEqual(1800);
      });

      it("creates a new transaction with withdrawal and amount as arguments", function(){
        account.withdraw(200);
        expect(account._transactionClass).toBeDefined();
      });

      it("adds the transaction into account history", function(){
        account.withdraw(200);
        account.withdraw(200);
        expect(account._history._history.length).toBe(2);
      });
    });

    describe("print statement", function(){
      xit("prints the account history", function(){
        account.withdraw(200);
        expect(account.printStatement()).toEqual(account._history);
      });
    });
  });
