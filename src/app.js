document.addEventListener('DOMContentLoaded', function() {
   var account = new Account(200);
   document.getElementById('balance').innerHTML = "Current balance: " + account._balance;
});
