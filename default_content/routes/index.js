/**
 * @file index
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project Pomegranate-docker
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

/**
 * Default route file for pomegranate-docker
 * @module index
 */

module.exports = function(Router){
  Router.get('/', function(req, res){
    res.render('Default_content');
  })

  return Router
};