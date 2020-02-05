$(function() {
	$("#fetchBtn").click(loadPosts);
});

function loadPosts() {
	var usrId = $("#userId").val();
	 fetch('https://jsonplaceholder.typicode.com/posts?userId='+usrId)
  		.then(response => response.json())
  		.then(json => displayPosts(json))
}

function displayPosts(userPosts){
	console.log(userPosts[0].id);
	$('#idText').text(userPosts[0].id);
	//$('#nameText').text(userPosts[0].name);
	//$('#idText').text(userPosts[0].id);
	//$('#idText').text(userPosts[0].id);
	//$('#idText').text(userPosts[0].id);
	$.each(userPosts,function(idx, e){		
		let postItem = $('<div>');
		 postItem.text(e.body) ;
		 $("#posts").append(postItem);
		 $("#posts").append('<br>');
	});
}