$(function(){
    
    $("div.circle").click(function(){$(this).hide();}); 

    $("#startBtn").click(function(){

        let width = $("#width").val();
        let gAmount = $("#gAmount").val();
        let gRate = $("#gRate").val();
        let cirNumber = $("#cirNo").val();
        const $circles = $(".circles");

        for(let i=0;i<cirNumber;i++){
            $circles.after(' <div class="aCircle"> </div>');
            console.log(i);
        }
    });

// let myInterval = setInterval(() => {
        //     const width = parseInt($("div.circle").css("width"));
        //     const height = parseInt($("div.circle").css("height"));
        //     const radius = parseInt($("div.circle").css("border-radius"));

        //     $("div.circle").css({
        //         'border-radius': radius+12 + "px",
        //         'width' : width + 12 + 'px',
        //         'height': height + 12 + 'px',
        //         'border-color': 'red'
        //     })

        // }, 250);
});