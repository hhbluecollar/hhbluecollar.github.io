
(function (){
    "use strict";

    const assert = chai.assert;
    let acc = new Account(123);
    let savAcc = new savingAccount(4,456);
    let chckAcc = new checkingAccount(500,789);
    let bank = new Bank();

    describe('Account Class Test', function(){
        it('Assertion passed : The balance of just created account is 0.', function(){
         assert.equal(acc.getBalance(),0);
        });

        it('Assertion failed: The account number is not correct.', function(){
            assert.equal(acc.getNumber(),567);
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

    describe('Saving Account Class Test', function(){
        it('Assertion passed : The interest rate is correct.', function(){
         assert.equal(savAcc.getInterest(),4);
        });

        it('Assertion passed: The interest rate was successfully updated.', function(){
            savAcc.setInterest(2);
            assert.equal(savAcc.getInterest(),2);
        });

           it('Assertion passed: The balance was correct after interest added.', function(){
            savAcc.deposit(100)
            savAcc.addInterest();
            assert.equal(savAcc.getBalance(),102);
           });       
    });

    describe('Checking Account Class Test', function(){
        it('Assertion failed : The overdraft is 500 not 1000.', function(){
         assert.equal(chckAcc.getOverdraft(),1000);
        });

        it('Assertion failed: The amount is greater than the overdraft.', function(){
            chckAcc.deposit(500);
            assert.equal(chckAcc.withdraw(1001),undefined);
        }); 
        it('Assertion passed: The amount is within the overdraft limit.', function(){
            chckAcc.deposit(500);
            assert.equal(chckAcc.withdraw(1000),undefined);
        });      
    });

    describe('Bank Class Test', function(){
        it('Assertion passed : Adding Account is successful. The returned account number matches.', function(){
            assert.equal(bank.addAccount(),0);
        });

        it('Assertion passed : Adding Saving Account is successful. The returned account number matches.', function(){
            assert.equal(bank.addAccount(),1);
        }); 
        it('Assertion passed : Adding Checking Account is successful. The returned account number matches.', function(){
            assert.equal(bank.addAccount(),2);
        });   
        it('Assertion passed : Deleting an Account is successful. Number of accounts decreased by 1.', function(){
            bank.closeAccount();
            assert.equal(bank.accounts.length,2);
        });    
    });    
})();

