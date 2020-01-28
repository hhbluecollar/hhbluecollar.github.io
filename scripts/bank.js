"use strict";

class Bank{

    accounts = [];
    static nextNumber;

    constructor(){
        this.nextNumber = 0;
    }
    /*
    *add saving account method
    */    addAccount(){
        let newAccount = new Account(this.nextNumber);
        this.accounts.push(newAccount);
        this.nextNumber++;
        return this.nextNumber-1;
    }
    /*
    *add saving account method
    */
    addSavingAccount(interest){
        let newAccount = new savingAccount(interest,this.nextNumber);
        this.accounts.push(newAccount);
        this.nextNumber++;
        return this.nextNumber-1; 
    }
    /*
    *add saving account method
    */
    addCheckingAccount(overdraft){
        let newAccount = new checkingAccount(overdraft,this.nextNumber);
        this.accounts.push(newAccount);
        this.nextNumber++;
        return this.nextNumber-1;
    }
    /*
    *delete/ close account
    *find the index and delete it from the accounts array
    */
    closeAccount(number){
        let pos = this.accounts.map(function(e) { return e.getNumber(); }).indexOf(number);     
        delete this.accounts.splice(pos,1);
    }

    /*
    *accounts report 
    */
    accountReport(){


        document.write('<h3 style="padding-left: 50px; text-decoration:underline;">ACCOUNTS REPORT</h3>');

        this.accounts.forEach(element => {
            document.write('<div style="padding-left: 80px; ; ">' + element+'</div>');
        });
        document.write('<br>');
    }

    endOfMonth(){
        document.write('<h3 style="padding-left: 50px; text-decoration:underline;">END OF MONTH REPORT</h3>');
        this.accounts.forEach(ele => document.write('<div style="padding-left: 80px; ; ">' + ele.endOfMonth()+"</div>"));             
    }
}

// local test function 
(function(){
    let b = new Bank();
    let a = b.addAccount();
    let s = b.addSavingAccount(4);
    let c = b.addCheckingAccount(500);
    let monthlyRepo = b.endOfMonth();
    let repo = b.accountReport();

document.write("The number of created accounts are(respectively) : " + a+", "+s+", and "+c);
document.write('<br>'); 
b.closeAccount(1);
document.write("The number of remaining accounts after deletion  : " + b.accounts.length);
document.write('<br>');
document.write('<br>');

})();

//=============================PART 1 ============================

class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // ok now
  //alert(rabbit.name); // White Rabbit

//===================================================================

  class ExtendedClock extends Clock {
    constructor(options) {
      super(options);
      let { precision=1000 } = options;
      this.precision = precision;
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), this.precision);
    }
  };