
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Mick\'s Travel Services - Home Page' });
};