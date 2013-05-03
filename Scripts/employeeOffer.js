if (Meteor.isClient){

	Template.employeeOffer.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".home-btn").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$("#linkIAA").click(function(){
			Meteor.Router.to('/invention');
			$('body').scrollTop(0);
		});
	};
}