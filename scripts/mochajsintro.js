/*
	This function compares two inputs and returns the larges one
*/
module.exports=	{
	 maxTwo:function (a,b){										
		if(a>b) {
			return a; 
		}
		else {
			return b;
			
		}
	}				
/*
	This function compares three inputs and returns the larges one
*/
, maxThree:function (a,b,c){
		let max=0;

		if(a>b){ 
			if(a>c) {
				return a;
			}
			else if(b>c){
				{
					return b;
			}
		}
		else if(b>c){
			return b
		} 
			
		else { 
			return c;
			}
	}
} 


/*
	This function checks if an input is a vowel
*/
, isVowel : function (ch){  
	if(ch === 'a' || ch === 'e' || ch === 'i' || ch ==='o' || ch === 'u' ) 
		return true ; 
	else 
		return false;
	}

/*
	This function sums the elements of an input array
*/
, sum : function (arr){
		let sum = 0;
		for( const i of arr){
			sum+=i;
		}

		return sum;
	}

/*
	This function multiply the elements of an input array
*/
, multiply : function (arr){
		let mul = 1;
		for( const i of arr){
			mul*=i;
		}

		return mul;
	}

/*
	This function reverses a string input
*/
, stringReverse : function (input){     
		let reversedInput = "";
			for (let i = input.length - 1; i >= 0; i--) { 
				reversedInput += input[i];
			}		
	
		return reversedInput;
	}


/*
	This function returns the longes word from an array of word inputs
*/
, findLongestWord : function (arr){
		let longest = "";
		    for( const i of arr){
				if(i.length>longest.length)
					longest = i;
			}
		return longest;
	}

/*
	This function returns the list of longes words from an array of word inputs lengths greater than  a given length 
*/
, filterLongWords : function  (arr,num){
		let longestList = [];
		    for( let i of arr){
				if(num<i.length)
					longestList.push(i);
			}
		
		return longestList;
	}

/*
	This function multiplies each element of an array by 10
*/
, multiplyByTen : function (){
        const a = [1,3,5,3,3]; 
        a.map(function(elem, i, array) {
                             return elem * 10;
                       })
	}

/*
	This function selects each element of an array with value of 3
*/
, elementOf3 : function (){
        const a = [1,3,5,3,3]; 

        const c = a.filter(function(elem, i, array){
                             return elem === 3;
                            });
	}

/*
	This function multiplies each element of an array each other
*/
, arrayProduct : function (){
        const a = [1,3,5,3,3]; 

        const d = a.reduce(function(prevValue, elem, i, array){
                                 return prevValue * elem;
                                 });
	 }



	 
//=========================================================================

,myMap:function (arr, mapFunc) { 

	const mapArr = [];      
	 for(let i=0;i<arr.length;i++) {        
	   const result = mapFunc(arr[i], i, arr);       
		mapArr.push(result);   
	   }   
		return mapArr;
	  }

	 , myFilter: function (arr, filterFunc) {    
	const filterArr = [];  
	 for(let i=0;i<arr.length;i++) {        
	   const result = filterFunc(arr[i], i, arr);        
		if(result)            
		 filterArr.push(arr[i]);    
		 }   
	return filterArr;
  }
}


