if (Meteor.isClient) {

	Template.note.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$("#npaSelect").click(function(){
			$("#noteSelect").removeClass("active");
			$("#npaSelect").addClass("active");
			$("#noteText").addClass("hide");
			$("#npaText, #investorText, #certText, #bylawsText, #foundersText").removeClass("hide");
		});
		$("#noteSelect").click(function(){
			$("#noteSelect").addClass("active");
			$("#npaSelect").removeClass("active");
			$("#npaText, #investorText, #certText, #bylawsText, #foundersText").addClass("hide");
			$("#noteText").removeClass("hide");
		});
	};

	Template.landing.rendered = function(){
		$(".tile").mousedown(function(){
			$(this).removeClass("tileShadow");
		});

		$(".tile").mouseup(function(){
			$(this).addClass("tileShadow");
		});

	};

}