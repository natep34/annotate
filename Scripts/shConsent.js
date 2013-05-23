if (Meteor.isClient){

	Template.shConsent.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$("#indemnLink").click(function(){
			Meteor.Router.to('/indemnification');
			$('body').scrollTop(0);
		});
	};
}