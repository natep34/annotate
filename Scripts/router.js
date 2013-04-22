if (Meteor.isClient){

	Meteor.Router.add({
		'/': 'landing',
		'/certificate': 'cert',
		'/npa': 'npa',
		'/note': 'note',
		'/board': 'board',
		'/bylaws': 'bylaws',
		'/founders': 'founders',
		'/incorporation': 'incorp',
		'/shareholderConsent': 'shConsent',
		'*': 'landing'
	});
}