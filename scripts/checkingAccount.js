
    "use strict";
/**
 * A checking Bank Account class which extends Account class
 * 
 * Provides the basic functionality that every checking account should have
 */
 class checkingAccount extends Account{
    /**
        * Constructor for creating a new Account object
        * 
        * @param {overdraft} overdraft the overdraft for a checking account
        */
       constructor(overdraft,number){
           super(number);
           this._overdraft = overdraft; // saving interest
       }
        /**
         * Getter and setter methods
         * 
        */
       getOverdraft() {
           return this._overdraft;
       }
   
       setOverdraft(overdraft){
           this._overdraft = overdraft;
       }
    /**
     * Method to take money out of the account
     * 
     * @param {number} amount money to be taken out of the account
     * @returns {undefined}
     * @throws {RangeError} when amount is less than or equal to zero
     * @throws {Error} when the account has insufficient funds (balance)       
     * @throws {Error} when the overdraft limit is exceeded
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount - this._balance > this._overdraft) {
            throw Error("Requested amount more than overdraft limit");
        }
        this._balance -= amount;
    }

    endOfMonth(){
        let warning = "";
        if(this._balance<0)
            warning = "Warning, low balance ";
        return warning + "Checking account: "+this._number + " balance: "+
                this._balance + " overdraft limit: " + this._overdraft;   
    }
   
       toString() {
           return "Checking account " + this._number + ": balance " + this._balance + ":overdraft $"+this._overdraft+".";
       }
   }

