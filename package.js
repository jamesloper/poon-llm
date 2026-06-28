Package.describe({
	name: 'poon-llm',
	version: '3.0.0',
	summary: 'Poon LLM clients',
});

Npm.depends({
	mustache: '4.2.0',
});

Package.onUse(api => {
	api.use('ecmascript', 'server');
	api.use('modules', 'server');
	api.mainModule('index.js', 'server');
});
