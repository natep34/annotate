if (Meteor.isClient){

	Meteor.Router.add({
		'/': 'landing',
		'/certificate': 'cert',
		'/nda': 'nda',
		'/npa': 'npa',
		'/note': 'note',
		'/board': 'board',
		'/bylaws': 'bylaws',
		'/founders': 'founders',
		'/incorporation': 'incorp',
		'/invention': 'invention',
		'/rspa': 'rspa',
		'/shareholderConsent': 'shConsent',
		'*': 'landing'
	});
}