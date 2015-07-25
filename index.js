/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Paperelectron.com
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */


var pomegranate = require('pomegranate');
var assetCompress = require('node-minify');
var path = require('path');
var userHome = process.env.HOME;

var options = {
  port: 8080,
  templating: 'jade',
  renderErrors: true
};


options.basePath = userHome;


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
