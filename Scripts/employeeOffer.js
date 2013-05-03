if (Meteor.isClient){

	Template.employeeOffer.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
	};
}