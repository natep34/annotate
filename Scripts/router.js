if (Meteor.isClient){

	Meteor.Router.add({
		'/': 'landing',
		'/advisor': 'advisor',
		'/consulting': 'consulting',
		'/certificate': 'cert',
		'/employeeOffer': 'employeeOffer',
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