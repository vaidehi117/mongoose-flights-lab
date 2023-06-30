const flightModel = require('../models/flight');

module.exports = {
    index,
    new: newMovie,
    create
};

async function index(req,res) {
    const flights = await flightModel.find({});
    res.render('flights/index', {flights});
}

function newMovie(req,res){
    //we want to be able to render error message if the create action fails
    res.render('flights/new',{ errorMsg: '' });
}

async function create(req, res) {
    //convert nowBoarding's checkbox of nothing or "on" to boolean
    req.body.nowBoarding = !!req.body.nowBoarding;
    try {
        await flightModel.create(req.body)
        res.redirect('/flights')
      } catch (err) {
        console.log(err)
        res.redirect('/flights/new')
      }

}