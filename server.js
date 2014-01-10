var path = require('path');
var server = require('strata');

var root = path.resolve('./client');

server.use(server.commonLogger);
server.use(server.file, root, 'index.html');

server.run({ port: 9000 });
