if (Meteor.isClient){

	Template.invention.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".home-btn").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
	};
}