if (Meteor.isClient) {

	Template.note.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$("#npaSelect").click(function(){
			$("#noteSelect").removeClass("active");
			$("#npaSelect").addClass("active");
			$("#noteText").addClass("hide");
			$("#npaText").removeClass("hide");
		});
		$("#noteSelect").click(function(){
			$("#noteSelect").addClass("active");
			$("#npaSelect").removeClass("active");
			$("#npaText").addClass("hide");
			$("#noteText").removeClass("hide");
		});
	};

}