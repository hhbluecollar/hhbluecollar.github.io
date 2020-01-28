
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
       constructor(interest,number){
           super(number);
           this._interest = interest; // saving interest
       }
        /**
         * Getter and setter methods
         * 
        */
       getInterest() {
           return this._interest;
       }
   
       setInterest(interest){
           this._interest = interest;
       }
         /**
            * Add interest method
            * 
        */
       addInterest(){
           this._balance = this.getBalance()*this._interest/100 + this._balance;
       }
     
       endOfMonth(){
        return "Interest added saving account: "+this._number+"  balance: "+this._balance +" interest: "+this._interest;
    }
       toString() {
           return "Saving account: " + this._number + " balance: " + this._balance + " interest rate: "+this._interest +' %.';
       }
   }

