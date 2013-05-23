if (Meteor.isClient){

	Template.note.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
	};
}