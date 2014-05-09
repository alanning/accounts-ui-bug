Package.describe({
    summary: "Some package that uses templating"
});

Package.on_use(function (api) {

    api.use('templating', 'client');

    api.add_files('client.html', 'client');
    api.add_files('client.js', 'client');

});
