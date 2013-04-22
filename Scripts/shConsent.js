if (Meteor.isClient){

	Template.shConsent.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}