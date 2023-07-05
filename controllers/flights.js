const flightModel = require('../models/flight');

module.exports = {
    index,
    show,
    new: newMovie,
    create
};

async function index(req,res) {
    const flights = await flightModel.find({});
    res.render('flights/index', {flights});
}

async function show(req, res) {
    const flight = await flightModel.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }

function newMovie(req,res){
    //we want to be able to render error message if the create action fails
    res.render('flights/new',{ errorMsg: '' });
}

async function create(req, res) {
    //convert nowBoarding's checkbox of nothing or "on" to boolean
    req.body.nowBoarding = !!req.body.nowBoarding;
    try {
        const { airline, airport, flightNo, departs } = req.body;
        const flight = new flightModel({
            airline,
            airport,
            flightNo,
            departs,
        });
        await flight.save();
        res.redirect('/flights')
      } catch (err) {
        console.log(err)
        res.redirect('/flights/new')
      }
}