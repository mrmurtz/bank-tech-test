describe("BankAccount", function() {
  var account = new Account(2000);

  describe("initial deposit when created", function(){
    it("can hold a balance of £2000", function(){
      expect(account._balance).toEqual(2000);
    });

    it("has an empty history transaction when created", function(){
      expect(account._history).toEqual([]);
    });

    // it can inject transactions
  });

  describe("deposit", function(){
    it("increase the balance by the amount passed in", function(){
      account.deposit(200);
      expect(account._balance).toEqual(2200);
    });
    });
  });
