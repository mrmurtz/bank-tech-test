describe("BankAccount", function() {
  var account = new Account();

  describe("balance", function(){
    it("can hold a balance of £1000", function(){
      expect(account._balance).toEq(1000);
    });
  });


});
