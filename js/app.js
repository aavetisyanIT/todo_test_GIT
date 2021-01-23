if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/public/sw.js')
		.then(reg => console.log('service worker is registered'))
		.catch(err =>
			console.log('service worker is not registered', err.message),
		);
}
