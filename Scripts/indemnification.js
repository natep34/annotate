if (Meteor.isClient){

	Template.indemnification.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}