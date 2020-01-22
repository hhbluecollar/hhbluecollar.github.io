"use strict";
         
function areEqualArrays(array1, array2) {
    try{
      if(! Array.isArray(array1))   {return false;}
      if(! Array.isArray(array2))   {return false;}
      if(array1.length != array2.length){
        return false;
      }
  
      for(var i=0; i < array1.length; i++ ){
        if(array1[i] !== array2[i]){
          return false;
        }
      }
      return true;
    }catch(e) {
      return false;
    }
  }      

 const assert = chai.assert;
   

describe('Test Cases: Array Reverse', function(){

    //test for array reverse

  it('Assertion passed: The reverse of' + " ['A','B','C']" + ' is ' +"['C','B','A']" , function(){
    assert.equal(areEqualArrays( reverseArray([ "A", "B", "C" ]),["C","B","A"]),true);
  });

  it('Assertion Passed: Array equal to itself after in place reverse.', function(){
    let arrayValue = [ 1, 2, 3, 4, 5 ];    
    assert.equal(areEqualArrays(reverseArrayInPlace(arrayValue),arrayValue),true);
  });
});

    //test for list
    describe('Test Cases: List', function(){

        //test for array reverse
    
      it('Assertion passed: todo' , function(){
        assert.equal(areEqualArrays( reverseArray([ "A", "B", "C" ]),["C","B","A"]),true);
      });
    
      it('Assertion Passed: todo', function(){
        let arrayValue = [ 1, 2, 3, 4, 5 ];    
        assert.equal(areEqualArrays(reverseArrayInPlace(arrayValue),arrayValue),true);
      });
    });

console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));  
console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1)); 

//test for Deep comparison
context("Test cases: Deep Comparison" , function () {
    let longWords;
    beforeEach(function () {
        let obj = {here: {is: "an"}, object: 2};
    });

    describe("testing deepEqual", function () {
        it("object equal to itself", function () {
            assert.isTrue(deepEqual(obj, obj));
        });
        it("2 objs of equal values", function () {
            assert.isTrue(deepEqual(obj, {here: {is: "an"}, object: 2}));
        });
        it("similar but not equal objs", function () {
            assert.isFalse(deepEqual(obj, {here: 1, object: 2}));
        });
    });
});