if (Meteor.isClient){

	Template.cert.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$("#bylawsLink").click(function(){
			Meteor.Router.to('/bylaws');
			$('body').scrollTop(0);
		});
	};
}