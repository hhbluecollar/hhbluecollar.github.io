

/*
	This function sums the elements of an input array
*/
	function sum(arr){
		let sum = 0;
		let initialValue=0;
		// for( const i of arr){
		// 	sum+=i;
		// }
		sum = arr.reduce(function(accumulator,currentValue){
		return accumulator + currentValue;
		},initialValue);
		console.log("Summation of [1,2,3,4,5] is:" + sum);

		return sum;
	}
/*
	This function multiply the elements of an input array
*/
	function multiply(arr){
		let mul = 0;
		let initialValue=1;

		// for( const i of arr){
		// 	mul*=i;
		// }
		mul = arr.reduce(function(accumulator,currentValue){
			return accumulator*currentValue;
		},initialValue);
		console.log("Product of [1,2,3,4,5] is: " + mul);

		return mul;
	}
/*
	This function reverses a string input
*/
   function stringReverse(input){     
		let reversedInput = "";
			// for (let i = input.length - 1; i >= 0; i--) { 
			// 	reversedInput += input[i];
			// }
			reversedInput = input.split('').reverse().join('');	
			
			console.log("When 'Henok' is reversed it become: "+reversedInput);
	
		return reversedInput;
	}


/*
	This function returns the list of longes words from an array of word inputs lengths greater than  a given length 
*/
	function  filterLongWords(arr,num){
		// let longestList = [];
		//     for( const i of arr){
		// 		if(num<i.length)
		// 			longestList.push(i);
		// 	}
		longestList = arr.filter(str=>str.length>num);
			console.log("The words with length >4 from['Henok','Hussen','Abel','Tesh','Mulu'] are: "+longestList);
		
		return longestList;
	}
