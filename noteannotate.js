if (Meteor.isClient) {

	Template.landing.rendered = function(){

		$(".popped").popover().click(function(e){e.preventDefault();});

		$(".tile").mouseenter(function(){
			$(this).addClass("highlighted");
		});

		$(".tile").mouseleave(function(){
			$(this).removeClass("highlighted");
		});

		$("#boardNav").click(function(){
			Meteor.Router.to('/board');
		});

		$("#bylawsNav").click(function(){
			Meteor.Router.to('/bylaws');
		});

		$("#certNav").click(function(){
			Meteor.Router.to('/certificate');
		});

		$("#foundersNav").click(function(){
			Meteor.Router.to('/founders');
		});

		$("#incorpNav").click(function(){
			Meteor.Router.to('/incorporation');
		});

		$("#indemnificationNav").click(function(){
			Meteor.Router.to('/indemnification');
		});

		$("#inventionNav").click(function(){
			Meteor.Router.to('/invention');
		});

		$("#ndaNav").click(function(){
			Meteor.Router.to('/nda');
		});

		$("#noteNav").click(function(){
			Meteor.Router.to('/note');
		});

		$("#npaNav").click(function(){
			Meteor.Router.to('/npa');
		});

		$("#rspaNav").click(function(){
			Meteor.Router.to('/rspa');
		});

		$("#shConsentNav").click(function(){
			Meteor.Router.to('/shareholderConsent');
		});
	};
}