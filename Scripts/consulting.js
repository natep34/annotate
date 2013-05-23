if (Meteor.isClient){

	Template.consulting.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$(".inventionLink").click(function(){
			Meteor.Router.to('/invention');
			$('body').scrollTop(0);
		});
	};
}