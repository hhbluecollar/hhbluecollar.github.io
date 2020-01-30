$(function () {

    let width = parseInt($("#width").val());
    let gAmount = parseInt($("#gAmount").val());
    let gRate = parseInt($("#gRate").val());
    let cirNumber = $("#cirNo").val();
    const $circles = $(".circles");
    const $aCircle = $("div.aCircle");
    let myInterval =null;

    /**
     * Define the initial circle parameters
     */

    for (let i = 0; i < cirNumber; i++) {console.log(100 * i + "px");
    $circles.append($("<div>", {
        "class": "aCircle",
        "css": {
            "height":width,
            "display":"inline-block",
            "margin-right":"-5em",
            "width": width,
            "background-color": "#" + Math.floor(Math.random() * 16777215).toString(16),
            "z-index" : i*2, 
        }            
    }))
}

/**
 * add the event handlers
 */

$("div.aCircle").click(function () { $(this).hide(); });

$("div.aCircle").mousemove(function(){
    $(this).css("opacity",0.1);
});

$("div.aCircle").mouseleave(function(){
    $(this).css("opacity",1);
});

    /**
     * Start the time interval event and increment size accordingly
     */

    $("#startBtn").click(function () {
        
        if(myInterval){
            clearInterval(myInterval);
            myInterval = null;
        }

        myInterval = setInterval(() => {
            const widthOrginal = parseInt($("div.aCircle").css("width"));

            $("div.aCircle").css({
                'width': widthOrginal + gAmount + 'px',
                'height': widthOrginal + gAmount + 'px',
            })

        }, gRate);

    });
});