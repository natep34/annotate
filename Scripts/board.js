if (Meteor.isClient){

	Template.board.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}