/*
	This function compares two inputs and returns the larges one
*/
 	function maxTwo (a,b){
		if(a>b) {
			console.log("max of [4,5] is : "+ a);
			return a; 
		}
		else {
			console.log("max of [4,5] is : "+ b);
			return b;
			
		}
	}		
								
/*
	This function compares three inputs and returns the larges one
*/
	function maxThree(a,b,c){
		let max=0;

		if(a>b){ 
			if(a>c) {
				console.log("max of [5,4,9] is :"+a);
				return a;
			}
			else if(b>c){
				{
					console.log("max of [5,4,9] is :"+b);
					return b;
			}
		}
		else if(b>c){
			console.log("max of [5,4,9] is :"+b);
			return b
		} 
			
		else { 
			console.log("max of [5,4,9] is :"+c);
			return c;
			}
	}
} 

/*
	This function checks if an input is a vowel
*/
	function isVowel(ch){  
	if(ch === 'a' || ch === 'e' || ch === 'i' || ch ==='o' || ch === 'u' ) 
		return true ; 
	else 
		return false;
	}

/*
	This function sums the elements of an input array
*/
	function sum(arr){
		let sum = 0;
		for( const i of arr){
			sum+=i;
		}
		console.log("Summation of [1,2,3,4,5] is:" + sum);

		return sum;
	}
/*
	This function multiply the elements of an input array
*/
	function multiply(arr){
		let mul = 0;
		for( const i of arr){
			mul*=i;
		}
		console.log("Product of [1,2,3,4] is: " + mul);

		return mul;
	}
/*
	This function reverses a string input
*/
   function stringReverse(input){     
		let reversedInput = "";
			for (let i = input.length - 1; i >= 0; i--) { 
				reversedInput += input[i];
			}		
			console.log("When 'Henok' is reversed it become: "+reversedInput);
	
		return reversedInput;
	}

/*
	This function returns the longes word from an array of word inputs
*/
	function findLongestWord(arr){
		let longest = "";
		    for( const i of arr){
				if(i.length>longest.length)
					longest = i;
			}
			console.log("The longest word from ['Hussen','Girma','Henok','Blein'] is: " + longest);
		return longest;
	}
/*
	This function returns the list of longes words from an array of word inputs lengths greater than  a given length 
*/
	function  filterLongWords(arr,num){
		let longestList = [];
		    for( const i of arr){
				if(num<i.length)
					longestList.push(i);
			}
			console.log("The words with length >4 from ['Hussen','Girma','Henok','Blein'] are: "+longestList);
		
		return longestList;
	}
/*
	This function multiplies each element of an array by 10
*/
	function multiplyByTen(){
        const a = [1,3,5,3,3]; 
        const b = a.map(function(elem, i, array) {
                             return elem * 10;
                       })
        console.log("When each element of [1,3,5,3,3] mul by 10: "+b);
    }
/*
	This function selects each element of an array with value of 3
*/
    function ElementOf3(){
        const a = [1,3,5,3,3]; 

        const c = a.filter(function(elem, i, array){
                             return elem === 3;
                            });
        console.log("Elements of 3 from [1,3,5,3,3] are: "+c);
    }
/*
	This function multiplies each element of an array each other
*/
    function arrayProduct(){
        const a = [1,3,5,3,3]; 

        const d = a.reduce(function(prevValue, elem, i, array){
                                 return prevValue * elem;
                                 });
        console.log("Element product of [1,3,5,3,3] is: "+d);
	 }