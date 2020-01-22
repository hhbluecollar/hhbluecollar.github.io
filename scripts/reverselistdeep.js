//========================== REVERSE and REVERSE IN PLACE============
    
//(function(){
        "use strict";
        //go through each array element starting from end
        //and copy it to a new array to be returned.
        function reverseArray(arr) {
        let newArray = [];
        for (let i = 0; i < arr.length; i++) {
            newArray[i] = arr[arr.length - i - 1];
        }
        return newArray;
    }
    //traverse the array forward while saving each value in a temporary 
    //variable and swapping it to its symmetric location after half length
    function reverseArrayInPlace(arr) {
        for (let i = 0; i < arr.length / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
        return arr;
    }

    console.log(reverseArray([ "A", "B", "C" ]));
    let arrayValue = [ 1, 2, 3, 4, 5 ];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
//}());

//========================== LIST============

   // (function() {
        "use strict";    
        function arrayToList(arr) {
            let retVal = {    
                rest : null
    
            };
    
            for (let i = 0; i < arr.length; i++) {
    
                if (retVal.rest === null) { 
                    retVal.value = arr[i]; 
                    retVal.rest = {
    
                        rest : null
                    };
                } else {
                    let counter = retVal;
                    while (counter.rest !== null) {
                        counter = counter.rest;
                    }
                    counter.value = arr[i];
                    counter.rest = {
    
                        rest : null
                    };
    
                }
    
            }
    
            return retVal;
    
        }
    
        function listToArray(list) {
    
            let arr = [];
    
            while (list !== null) {
                if (list.value !== undefined)
                    arr.push(list.value);
                list = list.rest;
            }
    
            return arr;
    
        }
  

        function prepend(element, list) {
            return { 
                value : element,
                rest : list
            };
    
        }
    
    
        function nth(list, index) {
            return listToArray(list)[index];
        
        }
    
        function nthNextMethod(list, index) {      
            while (list !== null) {                
                if (list.value !== undefined) {
    
                    if (index-- === 0) {
                        return list.value;
                    }
                }
                list = list.rest;
    
            }
    
        }
    
        function recursiveNth(list, index) {
    
            if (index === 0)    
                return list.value;
    
            return recursiveNth(list.rest, --index);   
    
        }
    
        console.log(recursiveNth(arrayToList([ 10, 20, 30 ]), 1));  
        console.log(nth(arrayToList([ 10, 20, 30 ]), 1));
        console.log(nthNextMethod(arrayToList([ 10, 20, 30 ]), 1));    
    
    //}());
    

    //========================== DEEP COMPARISON ============


   // (function () {
    "use strict";

    /**
     * Compares two objects for equal values in all properties and recursively for any objects that are property values
     * @param a any object
     * @param b another object to be compared
     * @returns {boolean} true if they are deep equal, else false
     */
    function deepEqual(a, b) {
        /* check to see if equal primitive values or same object reference */
        if (a === b) {return true; }

        /* must both be objects or else cannot have equal values (after first test)*/
        if (a === null || typeof a !== "object" ||
            b === null || typeof b !== "object") { return false;}

        let keysA = Object.keys(a), keysB = Object.keys(b);

        /* must have same number of properties */
        if (keysA.length !== keysB.length) {return false; }

        /* must have all the same properties and the values of properties must be the same */
        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {return false; }
        }

        return true;
    }

    let obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
// → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
    console.log(deepEqual(null, null));
    const x = {a:1, b:2};
    const y = x;
    console.log(deepEqual(x, y));


    // context("Test cases: Deep Comparison" , function () {
    //     let longWords;
    //     beforeEach(function () {
    //         let obj = {here: {is: "an"}, object: 2};
    //     });

    //     describe("testing deepEqual", function () {
    //         it("object equal to itself", function () {
    //             assert.isTrue(deepEqual(obj, obj));
    //         });
    //         it("2 objs of equal values", function () {
    //             assert.isTrue(deepEqual(obj, {here: {is: "an"}, object: 2}));
    //         });
    //         it("similar but not equal objs", function () {
    //             assert.isFalse(deepEqual(obj, {here: 1, object: 2}));
    //         });
    //     });
    // });

//}());