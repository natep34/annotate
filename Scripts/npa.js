if (Meteor.isClient){

	Template.npa.rendered = function(){
		$(".popped").popover().click(function(e){e.preventDefault();});
		
		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});
		$("#certLink").click(function(){
			Meteor.Router.to('/certificate');
			$('body').scrollTop(0);
		});
		$("#bylawsLink").click(function(){
			Meteor.Router.to('/bylaws');
			$('body').scrollTop(0);
		});
		$("#foundersLink").click(function(){
			Meteor.Router.to('/founders');
			$('body').scrollTop(0);
		});
		$("#noteLink").click(function(){
			Meteor.Router.to('/note');
			$('body').scrollTop(0);
		});
		$("#escrowLink").click(function(){
			Meteor.Router.to('/escrow');
			$('body').scrollTop(0);
		});
	};
}