if (Meteor.isClient){

	Template.bylaws.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});

		$("#bylawsNav").click(function(){
			Meteor.Router.to('/bylaws');
		});
	};
}