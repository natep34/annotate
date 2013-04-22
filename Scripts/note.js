if (Meteor.isClient){

	Template.note.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}