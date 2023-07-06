
// Import our movie model in order to talk to the movies collection in mongodb
const Flight = require('../models/flight');

module.exports = {
	create
}


async function create(req, res){

	console.log(req.body)
	try {

		const flightFromTheDb = await Flight.findById(req.params.id)
		// I could check my code make sure I'm finding the flight
		
		// add the destination (req.body) to the movie (flightFromTheDb) we found from the db
		flightFromTheDb.destinations.push(req.body);
		// since I changed a document (flightFromTheDb) (I mutated it)
		// I have to tell mongodb that, so we have to save
		await flightFromTheDb.save();
		// Then respond to the client!
		console.log(flightFromTheDb)
		// what do you have access too that has the movie id?
		res.redirect(`/flights/${req.params.id}`)

	} catch(err){
		res.send(err)
	}

}