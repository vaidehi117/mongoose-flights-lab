const Flight = require('../models/flight');

module.exports = {
    index,
    new: newMovie,
    create
};

async function index(req,res) {
    const flights = await Flight.find({});
    res.render('flights/index', { flights });
}

function newMovie(req,res){
    //we want to be able to render error message if the create action fails
    res.render('flights/new',{ errorMsg: '' });
}

async function create(req, res) {
    // convert nowShowing's checkbox of nothing or "on" to boolean
    req.body.nowBoarding = !!req.body.nowBoarding;
    // remove any whitespace at start and end of cast
    // req.body.cast = req.body.cast.trim();
    // split cast into an array if it's not an empty string - using a regular expression as a separator
    // if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);
    try {
      await Flight.create(req.body);
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }