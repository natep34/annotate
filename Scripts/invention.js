if (Meteor.isClient){

	Template.invention.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}