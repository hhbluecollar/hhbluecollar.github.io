  
 $(function(){
        "use strict";

        let startClicked  = false;
        /*
        * change the border color and display the message
        * check only if the game is stared only
        */
        $("div.boundary").mouseenter(function(){
            if(startClicked){
                    $("div.boundary").css("background-color","#ff8080");
                    $("#status" ).text("You lose!");
                    startClicked = false;
                //   alert("You lose!");
            }
            });

        /*
        * starts the game 
        * 
        */
        $("#start").click(function(){
            startClicked = true;
            $("div.boundary").removeAttr('style');
                 $("#status").text("Move without touching the boundary.");
                    //}
              // $('div#start').unbind('click');

            });

            // $("body").not("div #maze").mousemove(function(){
            //     if(startClicked){
            //             $("div.boundary").css("background-color","#ff8080");
            //             $("#status" ).text("You lose!"); 
            //             $("#status" ).text('Click the "S" to begin.');
            //     }
        /*
        * change the border color and display the message when a player leaves the border
        * set for the game.
        * check only if the game is stared only
        */
            $("#maze").mouseleave(function(){
                if(startClicked){
                    $("div.boundary").css("background-color","#ff8080");
                    $("#status" ).text("You lose!");
                    startClicked = false;
                }
            });         
        /*
        * Once the game is started if the end is clicked then show message.
        * check only if the game is stared only
        */
            $("div#end").click(function(){
                if(startClicked){
                    $("#status" ).text('Congrats! You won!');   
                    startClicked = false;
                } 
            })     
 });
  