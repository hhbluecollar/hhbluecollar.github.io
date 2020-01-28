   "use strict";
      
      function myFunctionTest(expected, found) {
        if (expected === found) {
          return "TEST SUCCEEDED";
        } else {
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
      }

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
      //  const maxOfTwo = maxTwo(4,5);
      // const maxOfThree = require('../scripts/mochajsintro').maxThree;
      // const isVowel = require('../scripts/mochajsintro').isVowel;
      // const sum = require('../scripts/mochajsintro').sum;
      // const multiply = require('../scripts/mochajsintro').multiply;
      // const stringReverse = require('../scripts/mochajsintro').stringReverse;
      // const findLongestWord = require('../scripts/mochajsintro').findLongestWord;
      // const filterLongWords = require('../scripts/mochajsintro').filterLongWords;
      // const multiplyByTen = require('../scripts/mochajsintro').multiplyByTen;
      // const elementOf3 = require('../scripts/mochajsintro').elementOf3;
      // const arrayProduct = require('../scripts/mochajsintro').arrayProduct;     
      // const myMap = require('../scripts/mochajsintro').myMap;     
      // const myFilter = require('../scripts/mochajsintro').myFilter;     


      describe('JS TEST WITH MOCHA AND CHAI', function(){

        it('Assertion passed: The maximum of 5 and 4 is 5', function(){
          assert.equal(maxTwo(4,5),5);
        });

        it('Assertion Failed:Because 4 is not the max in ' + '[5, 4, 9]', function(){
          assert.equal(maxOfThree(5, 4, 9),4);
        });

        it('Assertion Failed:Assertion Failed. Because "hen" is not a vowel', function(){
          assert.equal(isVowel("hen"),true);
        });

        it('Assertion Failed:Because sum of "[1,2,3]" is not 4', function(){
          assert.equal(sum([1,2,3]),4);
        });

        it('Assertion Failed. Because Multiplication of [1,2,3, 4] is NOT 6', function(){
          assert.equal(multiply([1,2,3,4]),6);
        });

        it('Assertion Pass. Because "zyx" is the reverse of "xyz"', function(){
          assert.equal(stringReverse('xyz'),'zyx');
        });

        it('Assertion Pass. Because length "bcd" is  the largest word length in array [a, bcd,de]', function(){
          assert.equal(findLongestWord(['a', 'bcd','de']),'bcd');
        });

        it('Assertion Failed. [1,20,30] is not the list whose element multiple of 10 of [1, 2, 3]', function(){
          assert.equal(multiplyByTen(),[1,20,30]);
        });

        it('Assertion Failed. [bcd, ABEBE, kid] is not the longest words set of length 3 in [a, bcd,de, ABEBE, kid]', function(){
          assert.equal(filterLongWords(['a', 'bcd','de', 'ABEBE', 'kid'],3),['bcd', 'ABEBE', 'kid']);
        });

        it('Assertion Failed. [5] is not the list containing 3s from the list [1,2,3,3]', function(){
          assert.equal(areEqualArrays(elementOf3(),[5]),true);
        });   

        it('Assertion Pass. product of [1, 2, 3, 4] is 24.', function(){
          assert.equal(arrayProduct( ),24);
        });
        
       // =============================MAP and FILTER=========================
       
        it('Assertion Pass: product of [1, 2, 3] by 10 is [10,20,30].', function(){
          assert.equal(areEqualArrays(myMap([1,2,3],s=>s*10 ),[10,20,30]),true);
        });
        it('Assertion Pass: product of [1, 2, 3] by 5 is [5,10,15].', function(){
          assert.equal(areEqualArrays(myMap([1,2,3],s=>s*5 ),[5,10,15]),true);
        });
        it('Assertion Pass: product of [1, 2, 3] by 1 is [1,2,3].', function(){
          assert.equal(areEqualArrays(myMap([1,2,3],s=>s*1 ),[1,2,3]),true);
        });
  

        it('Assertion Pass. Implementation of my filter numbers under 10 & above 5 are [6,7,8,9].', function(){
          assert.equal(areEqualArrays(myFilter([1,2,3,4,5,6,7,8,9],s=>s>5 ),[6,7,8,9]),true);
        });     
        it('Assertion Pass: Implementation of my filter numbers under 10 & above 8 is only [9].', function(){
          assert.equal(areEqualArrays(myFilter([1,2,3,4,5,6,7,8,9],s=>s>8 ),[9]),true);
        });     
         it('Assertion Failed: Implementation of my filter numbers under 10 & above 5 are [6,7,8,9].', function(){
          assert.equal(areEqualArrays(myFilter([1,2,3,4,5,6,7,8,9],s=>s>1 ),[3,4,5,6,7,8,9]),true);
        });
      });



     