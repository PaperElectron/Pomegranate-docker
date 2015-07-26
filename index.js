/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */


var pomegranate = require('pomegranate');
var path = require('path');
var _ = require('lodash');

var options = {}
// Comment the line below and uncomment the next line for development.

var userHome = process.env.HOME;
//var userHome = __dirname + '/default_content'


try {
  var loadOptions = require(path.join(userHome, 'content','options.json'))
  options = _.omit(loadOptions, 'port', 'address', 'views', 'partials', 'routes', 'models', 'controllers', 'staticFiles')
}
catch (e){
  console.log(e);
  console.log('No options file found.')
};

options.port = 8080

// Comment the line below and uncomment the next line for development.

options.basePath = path.join(userHome, 'content');
//options.basePath = path.join(userHome);


pomegranate
  .init(options)
  .start()
  .on('log', function(msg){
    console.log(msg)
  })
  .on('log-request', function(msg){
    console.log(msg)
  })
  .on('error', function(err){
    console.log(err);
    process.exit()
  });
