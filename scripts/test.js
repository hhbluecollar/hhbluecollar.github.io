      
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
      
      console.log("Expected output of max(5,4) is 5  " + myFunctionTest(5, maxTwo(5, 4)));
      console.assert(9 === maxTwo(11, 9), "Assertion Failed. Because 9 is not the max for " + '[11, 9]');

      console.log("Expected output of maxOfThree(5,4,9) is 9  " + myFunctionTest(9, maxThree(5, 4, 9)));
      console.assert(4 === maxThree(5, 4, 9), "Assertion Failed. Because 4 is not the max in " + '[5, 4, 9]');

      console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel("a")));
      console.assert(true === isVowel("hen"), "Assertion Failed. Because 'hen' is not a vowel ");

      console.log("Expected output of sum('[1,2,3,4,5]') is 15  " + myFunctionTest(15, sum([1,2,3,4,5])));
      console.assert(4 === sum([1,2,3]), "Assertion Failed. Because sum of '[1,2,3]' is not 4");


      console.log("Expected output of multiply('[1,2,3,4]') is 24  " + myFunctionTest(24, multiply([1,2,3, 4])));
      console.assert(6 === multiply([1,2,3, 4]), "Assertion Failed. Because Multiplication of [1,2,3, 4] is NOT 6");

      console.log("Expected output of reverse('henok') is 'koneh'  " + myFunctionTest('koneh', stringReverse('henok')));
      console.assert("xyz"=== stringReverse('xyz'), "Assertion Failed. Because 'xyz' is not the reverse of 'xyz'");

      console.log("Expected output of findLongestWord(['Hussen','Girma','Henok','Blein']) is 'Hussen'" + myFunctionTest(3, findLongestWord(['Hussen','Girma','Henok','Blein'])));
      console.assert(2=== findLongestWord(['a', 'bcd','de']), "Assertion Failed. Because length 2 is not the largest word length in ['a', 'bcd','de']");

      console.log("Expected output of filterLongWords(['Hussen','Girma','Henok','Blein']) is '['Hussen','Girma','Henok','Blein']'  " + myFunctionTest(["Hussen","Girma","Henok","Blein"], filterLongWords(["Hussen","Girma","Henok","Blein"],4)));
      console.assert(areEqualArrays(['a', 'de'], filterLongWords(['a', 'bcd','de', 'ABEBE', 'kid'],3)) , "Assetion Failed. [bcd, ABEBE, kid] is not the longest words set of length 3 in ['a', 'bcd','de', 'ABEBE', 'kid'] ");

      console.log("Expected output of multiplyByTen('[1,3,5,3,3]') is '[10,30,50,30,30]'  " + myFunctionTest([10,30,50,30,30], multiplyByTen([1,3,5,3,3])));
      console.assert(areEqualArrays([1,20,30],multiplyByTen([1,2,3]) ), "Assertion Failed. '[1,20,30]' is not the list whose element multiple of 10 of '[1, 2, 3]'");

      console.log("Expected output of ElementOf3('[1,3,5,3,3]') is '[10,30,50,30,30]'  " + myFunctionTest([3,3,3], ElementOf3([1,3,5,3,3])));
      console.assert(areEqualArrays([3],ElementOf3([1,2,3, 3])), "Assertion Failed. '[3]' is not the list containing 3s from the list '[1,2,3, 3]'");

      console.log("Expected output of arrayProduct(' [1,3,5,3,3]') is 135  " + myFunctionTest(24, arrayProduct( [1,3,5,3,3])));
      console.assert(12 === arrayProduct( [1,3,5,3,3]), "Assertion Failed. product of '[1, 2, 3, 4]' is not 12. ");