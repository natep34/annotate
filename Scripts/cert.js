if (Meteor.isClient){

	Template.cert.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});

		$("#certNav").click(function(){
			Meteor.Router.to('/certificate');
		});
	};
}