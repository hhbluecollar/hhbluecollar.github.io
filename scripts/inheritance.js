
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
})();

console.log("When we filter the sentence 'WAP TA is the best TA from all over MIU lol' for the banned words:'the','TA','lol' the output is:")
console.log("WAP TA is the best TA from all over MIU lol".bannedFilter(['the','TA','lol']));


(function(){
    "use strict"

    Array.prototype.BubbleSort = function(){
        for(const i=0;i<this.length;i++){
            for(const j=i+1;j<this.length;j++){
                if(this[i]>this[j]){
                    let temp = this[i];
                    this[i]=this[j];
                    this[j]=temp;
                
                }
            }
        }
    }
})();
