/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */


var pomegranate = require('pomegranate');
var path = require('path');
var _ = require('lodash');
var userHome = process.env.HOME;

try {
  var loadOptions = require(path.join(userHome, 'options.json'))
}
catch (e){
  console.log('No options file found.')
};

var options = {
  port: 8080,
  templating: 'jade',
  renderErrors: true
};


options.basePath = path.join(userHome, 'content');


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
