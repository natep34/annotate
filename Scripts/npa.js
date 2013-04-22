if (Meteor.isClient){

	Template.npa.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}