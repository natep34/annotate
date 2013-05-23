if (Meteor.isClient){

	Template.advisor.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$(".rspaLink").click(function(){
			Meteor.Router.to('/rspa');
			$('body').scrollTop(0);
		});
	};
}