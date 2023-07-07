const flightModel = require('../models/flight');


module.exports = {
    index,
    show,
    new: newFlight,
    create,
    createSeat
};

async function index(req,res) {
    try {
        const flights = await flightModel.find({});
        // console.log("hrllo")
        // console.log(flights)
        res.render('flights/', {flights});
    } catch(err) {
        console.log(err);
        res.render(err)
    }
}

async function show(req, res) {
    const flight = await flightModel.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }

function newFlight(req,res){
    //we want to be able to render error message if the create action fails
    res.render('flights/new', { airline: "Add Flight", errorMsg: "" });
}

async function create(req, res) {
    req.body.nowBoarding = !!req.body.nowBoarding;
    if(req.body['Departs-time'] === '')delete req.body['Departs-time']
    const filghtFromTheDatabase = await flightModel.create(req.body)

    res.redirect(`flights/${filghtFromTheDatabase._id}`)
}

async function createSeat(req, res) {
    console.log(req.body)
    const ticketFromTheDatabase = await ticketModel.create(req.body)
    // req.body.nowBoarding = !!req.body.nowBoarding;
    // if(req.body['Departs-time'] === '')delete req.body['Departs-time']
    // const filghtFromTheDatabase = await flightModel.create(req.body)

    // res.redirect(`flights/${filghtFromTheDatabase._id}`)
}