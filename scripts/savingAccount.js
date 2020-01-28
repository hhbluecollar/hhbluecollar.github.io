(function(){

    "use strict";
/**
 * A saving Bank Account class which extends Account class
 * 
 * Provides the basic functionality that every saving account should have
 */

class savingAccount extends Account{
    /**
        * Constructor for creating a new Account object
        * 
        * @param {interest} interest the interest for saving account
        */
       constructor(interest){
           this._interest = interest; // saving interest
       }
       getInterest() {
           return this._interest;
       }
   
       setInterest(interest){
           this._interest = interest;
       }
   
       addInterest(){
           this._balance = this.getBalance()*this._interest/100;
       }
   
       toString() {
           return "The saving account " + this._number + ": balance " + this._balance + ":interest rate "+this._interest;
       }
   }
})();
