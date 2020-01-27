

//==============================Banned work filter===========================
(function (){
    "user strict"


    String.prototype.bannedFilter = function (arr){
        let str = this.split(" ");
        let newArray = [...str];
        str.forEach(element => {
            for(let s=0;s<arr.length; s++){
                if(arr[s]===element){
                    newArray.splice(newArray.indexOf(element),1);  
                }
            }
        }); 
  
        return newArray;
    }

//========================== MOCHA TEST =====================

    const assert = chai.assert;

    describe('MOCHA TEST FOR BANNED WORD FILTER', function(){

        const sentences = "WAP TA is the best TA from all over MIU lol";
        const bannedWords = ['the','TA','lol'];
        it("Assertion passed: When we filter the sentence 'WAP TA is the best TA from all over MIU lol' for the banned words:'the','TA'and 'lol' the output is ['WAP', 'is', 'best', 'from', 'all', 'over, 'MIU']", function(){
          assert.equal( JSON.stringify(sentences.bannedFilter(bannedWords)),  JSON.stringify(["WAP", "is", "best", "from", "all", "over", "MIU"]));
        });    
});
})();

console.log("When we filter the sentence 'WAP TA is the best TA from all over MIU lol' for the banned words:'the','TA','lol' the output is:")
console.log("WAP TA is the best TA from all over MIU lol".bannedFilter(['the','TA','lol']));


//============================== Bubble sort ===========================

(function(){
    "use strict"

    Array.prototype.bubbleSort = function(){
       for(let m=0;m<this.length;m++){
        for(let i=0;i<this.length-1;i++){
                if(this[i]>this[i+1]){
                    let temp = this[i];
                    this[i]=this[i+1];
                    this[i+1]=temp;                
            }
        }}
        return this;
    }
})();


//============================== TEST Bubble sort ===========================

const assert = chai.assert;

describe('MOCHA TEST FOR BUBBLE SORT ALGORITHM', function(){

    const unsorted = [6,4,0, 3,-2,1,9];
    it("Assertion passed: The bubble sort of [6,4,0, 3,-2,1,9] is [-2, 0, 1, 3, 4, 6, 9]", function(){
      assert.equal( JSON.stringify(unsorted.bubbleSort()),  JSON.stringify([-2, 0, 1, 3, 4, 6, 9]));
    });    
});
console.log("The bubble sort of [6,4,0, 3,-2,1,9] is: ");
console.log([6,4,0, 3,-2,1,9].bubbleSort());


//============================== Teacher Student ===========================

(function(){
    var Person = function() {};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject){
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){}
Teacher.prototype = new Person();

Teacher.prototype.teaches = function(course){
    console.log(this.name + " is now teaching " + course);
        return this.name + " is now teaching " + course;
}
var myTeacher = new Teacher();

myTeacher.initialize("Tolosa", 40);
myTeacher.teaches("Biology");

//============================== TEST teacher ===========================

const assert = chai.assert;

describe('MOCHA TEST FOR INHERITANCE (Teacher class)', function(){

    const unsorted = [6,4,0, 3,-2,1,9];
    it("Assertion passed: the course taught by professor Tolosa is Biology: ", function(){
      assert.equal( myTeacher.teaches("Biology") ,  "Tolosa is now teaching Biology");
    });    
});

})()
