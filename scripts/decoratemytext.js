"use strict";

/*
    this function loads all the event listeners while the window loads.
*/
  window.onload = function loading(){
        document.getElementById("btn-decoration").onclick = changeSize;
        document.getElementById("btn-malkovitch").onclick = MalkoniFive; 
        document.getElementById("btn-igpay").onclick = igpay;

  }
  
/*
    this function the basic layouts for the text area properties.
*/

  function changeSize(){  
    let text = document.getElementById("textarea");
    let delta = 2;    
    let fontSize=parseInt(window.getComputedStyle(text).getPropertyValue('font-size')) ;
    text.style.fontSize= (delta+fontSize)+"pt";
    //setInterval(changeSize, 500);
    setTimer();
}

/*
    this function the basic layouts while the Bling checkbox is clicked.
*/
function changeAlert(){
    let chkboxBling = document.getElementById("bling");
    let text = document.getElementById("textarea");
    if(chkboxBling.checked){
          text.style.fontWeight = 'bold';
          text.style.color = "green";
          text.style.textDecoration = "underline";
          document.body.style.background = "#f3f3f3 url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')  no-repeat right top";        }
    else{
          text.style.fontWeight = 'normal';
          text.style.textDecoration = "none";
          text.style.color = "black";
          document.body.style.background = "none";

        }
}

/*
    checks if a character is a vowel or not.
    uses filter!!!
*/
function isVowl(ch){  
    let vowels= ["a", "e", "i", "o", "u"];
    // if(vowels.filter(v=>(v===ch))){     /// uses filter function here
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch ==='o' || ch === 'u' )   
      return true ; 
    
	  else 
        return false;    
    }

    /*
this function implements the igapay rule affecting the inputs in the textarea.
*/
function igpay(){
    let str = document.getElementById("textarea").value; 
    if(!str) {
        return "" ;
      }
    str= str.split(" ");          

    for(let i=0;i<str.length;i++){

        if(isVowl(str[i].charAt(0))){
            str[i] = str[i]+"-ay"; 
        }     
        else{
            console.log(str[i].charAt(0));
            str[i] = str[i]+str[i].charAt(0)+"-ay";
        }
    }
    document.getElementById("textarea").value=str.join(" ");
}

    /*
this function implements the Malkovich rule affecting the inputs in the textarea with 
size >=5.
*/
function MalkoniFive() {

    let str = document.getElementById("textarea").value;    
    if(! str) {
      return "";
    }

    let words= str.split(" ");
    let newWords= [];

    for(let i=0; i < words.length; i++) {
      if (words[i] === " ,") {
        continue;
      }
  
      if (words[i].length >= 5) {
        newWords.push('Malkovich');
      }
      else {
        newWords.push(words[i]);
      }
    }
    document.getElementById("textarea").value=newWords.join(" ");
  }
function setTimer() {
    setInterval(changeSize, 500);

}