
const ticketModel = require('../models/ticket');

module.exports = {
	createSeat
}
async function createSeat(req, res) {
    console.log(req.body)
    const ticketFromTheDatabase = await ticketModel.create(req.body)
    // req.body.nowBoarding = !!req.body.nowBoarding;
    // if(req.body['Departs-time'] === '')delete req.body['Departs-time']
    // const filghtFromTheDatabase = await flightModel.create(req.body)

    res.redirect(`/flights/${ticketFromTheDatabase._id}`)
}