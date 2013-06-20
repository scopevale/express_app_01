
/*
 * GET booking form from Wufoo.
 */

exports.list = function(req, res){
    res.render('booking', { title: 'Mick\'s Travel Services - Booking Form' });
  // res.send("respond with a resource");
};