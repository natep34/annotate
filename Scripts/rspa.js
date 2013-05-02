if (Meteor.isClient){

	Template.rspa.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}