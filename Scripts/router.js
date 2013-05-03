if (Meteor.isClient){

	Meteor.Router.add({
		'/': 'landing',
		'/certificate': 'cert',
		'/employeeOffer': 'employeeOffer',
		'/escrow': 'escrow',
		'/nda': 'nda',
		'/npa': 'npa',
		'/note': 'note',
		'/board': 'board',
		'/bylaws': 'bylaws',
		'/founders': 'founders',
		'/incorporation': 'incorp',
		'/indemnification': 'indemnification',
		'/invention': 'invention',
		'/rspa': 'rspa',
		'/shareholderConsent': 'shConsent',
		'*': 'landing'
	});
}