// Just a basic server setup for this site
//require.paths.unshift('<path_to_node>/lib/node/connect');
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
  Creationix.log(),
  require('wheat')()
)).listen(8089);
