describe("BankAccount", function() {
  var account = new Account(2000);

  describe("balance", function(){
    it("can hold a balance of £2000", function(){
      expect(account._balance).toEqual(2000);
    });

  describe("printStatement", function(){
    it("prints statements", function(){
      expect(account.printStatement()).toEqual("date: £2000");
    });
  });
  });


});
