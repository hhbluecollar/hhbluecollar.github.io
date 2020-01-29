  
 $(function(){
     
        let startClicked  = false;
        $("div.boundary").mouseenter(function(){
            if(startClicked){
                    $("div.boundary").css("background-color","#ff8080");
                    $("#status" ).text("You lose!");
                    startClicked = false;
                //   alert("You lose!");
            }
            });

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

            $("#maze").mouseleave(function(){
                if(startClicked){
                    $("div.boundary").css("background-color","#ff8080");
                    $("#status" ).text("You lose!");
                    startClicked = false;
                }
            });         

            $("div#end").click(function(){
                if(startClicked){
                    $("#status" ).text('Congrats! You won!');   
                    startClicked = false;
                } 
            })     
 });
  