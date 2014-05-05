CloudFlare.define("cfsampleapp-subscriptions", ["cfsampleapp-subscriptions/config"], function(_config, $) {
	function doSomething() {
		// build the URL for your JS resource
		var url = 'http://cfapps.net/cfsampleapp-subscriptions/js/embed_js?domain_id=' + _config.domain_id; // This should be HTTPS on any production app

		// load and execute file
		CloudFlare.require([url]);
	}

	function checkConfigOption() {
		if (_config.option_1 == "true") {
			doSomething();
		}
	}
	checkConfigOption();
});
