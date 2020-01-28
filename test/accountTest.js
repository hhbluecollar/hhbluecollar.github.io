
(function (){
    "use strict";

    const assert = chai.assert;
    let acc = new Account(123);

    describe('Account Class Test With Mocha and Chai.', function(){
        it('Assertion passed : The balance of just created account is 0.', function(){
         assert.equal(acc.getBalance(),0);
        });

        it('Assertion passed: The account number matched.', function(){
            assert.equal(acc.getNumber(),123);
           });

           it('Assertion passed: Account balance updated after deposit.', function(){
            acc.deposit(100)
            assert.equal(acc.getBalance(),100);
           });

           it('Assertion passed : Account balance updated after withdrawal.', function(){
            acc.withdraw(50);
            assert.equal(acc.getBalance(),50);
           });
    });
})();

