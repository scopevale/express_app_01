
/*
 * GET booking form from Wufoo.
 */

exports.list = function(req, res){
    res.render('booking', { title: 'Booking Form' });    
  // res.send("respond with a resource");
};