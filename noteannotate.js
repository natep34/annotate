if (Meteor.isClient) {

	Template.landing.rendered = function(){

		$(".popped").popover().click(function(e){e.preventDefault();});

		$(".brand").click(function(){
			Meteor.Router.to('/');
			$('body').scrollTop(0);
		});

		$(".tile").mouseenter(function(){
			$(this).addClass("highlighted");
		});

		$(".tile").mouseleave(function(){
			$(this).removeClass("highlighted");
		});

		$("#advisorNav").click(function(){
			Meteor.Router.to('/advisor');
			$('body').scrollTop(0);
		});

		$("#boardNav").click(function(){
			Meteor.Router.to('/board');
			$('body').scrollTop(0);
		});

		$("#bylawsNav").click(function(){
			Meteor.Router.to('/bylaws');
			$('body').scrollTop(0);
		});

		$("#certNav").click(function(){
			Meteor.Router.to('/certificate');
			$('body').scrollTop(0);
		});

		$("#consultingNav").click(function(){
			Meteor.Router.to('/consulting');
			$('body').scrollTop(0);
		});

		$("#employmentNav").click(function(){
			Meteor.Router.to('/employeeOffer');
			$('body').scrollTop(0);
		});

		$("#escrowNav").click(function(){
			Meteor.Router.to('/escrow');
			$('body').scrollTop(0);
		});

		$("#foundersNav").click(function(){
			Meteor.Router.to('/founders');
			$('body').scrollTop(0);
		});

		$("#incorpNav").click(function(){
			Meteor.Router.to('/incorporation');
			$('body').scrollTop(0);
		});

		$("#indemnificationNav").click(function(){
			Meteor.Router.to('/indemnification');
			$('body').scrollTop(0);
		});

		$("#inventionNav").click(function(){
			Meteor.Router.to('/invention');
			$('body').scrollTop(0);
		});

		$("#ndaNav").click(function(){
			Meteor.Router.to('/nda');
			$('body').scrollTop(0);
		});

		$("#noteNav").click(function(){
			Meteor.Router.to('/note');
			$('body').scrollTop(0);
		});

		$("#npaNav").click(function(){
			Meteor.Router.to('/npa');
			$('body').scrollTop(0);
		});

		$("#rspaNav").click(function(){
			Meteor.Router.to('/rspa');
			$('body').scrollTop(0);
		});

		$("#shConsentNav").click(function(){
			Meteor.Router.to('/shareholderConsent');
			$('body').scrollTop(0);
		});
	};
}