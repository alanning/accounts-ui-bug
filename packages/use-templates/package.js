Package.describe({
    summary: "Some package that uses templating"
});

Package.on_use(function (api) {

    api.use(['templating', 'amplify'], 'client');

    api.add_files('client.js', 'client');
    api.add_files('client.html', 'client');

});