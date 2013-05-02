if (Meteor.isClient){

	Template.nda.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}