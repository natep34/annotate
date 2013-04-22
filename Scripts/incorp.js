if (Meteor.isClient){

	Template.incorp.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}