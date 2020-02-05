$(document).ready(function() {
    $("#puppies").on("click", updatePictures);
    $("#kitties").on("click", updatePictures);
 });
 function updatePictures(event) {
     var animal = "";
     if ($("#puppies").prop("checked") == true) {
        animal = "puppy";
     } else {
         animal = "kitty";
     }

     $.ajax("http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php", {
     "type": "get",
     "success": displayPictures,
     "data": {"animal": animal}
     });
 }
 function displayPictures(data) {
    $("#pictures").html(data);
    $("#pictures img").each(function(idx, e) {
         $(e).attr("src","http://mumstudents.org/cs472/2016-03-AS-KL/Sections/8/ajaxpets/"+ $(e).attr("src"));
    });    
 }
 //absolute url for get -- http://mumstudents.org/cs472/2013-09/Sections/8/ajaxpets/ajaxpets.php