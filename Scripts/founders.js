if (Meteor.isClient){

	Template.founders.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});

		$("#foundersNav").click(function(){
			Meteor.Router.to('/founders');
		});
	};
}