
const { executeQuery } = require('../DBAccess')

var TripRepository = {};

TripRepository.saveTrip = function (locations, user_id, imageUrl, city) {

    var query = `
        INSERT INTO public."Trips"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4,$5,$6,$7)
        RETURNING id
        `

    const values = [city, locations.places, locations.area, locations.duration, user_id, imageUrl, false];

    return executeQuery(query, values);
}

TripRepository.markTripAsSaved = function (tripId) {
    var query = `
        UPDATE public."Trips"
        SET is_saved = true
        WHERE id=($1)
        `
    const values = [tripId];

    return executeQuery(query, values);
}

// how much each place was searched
TripRepository.getAmountOfSeraches = function () {
    var query = `
    SELECT name, COUNT (id)
    FROM public."Trips"
    GROUP BY
        name	
    `
    return executeQuery(query, []);
}

// the avg duration of this user's trip
TripRepository.avgDuration = function (user_id) {
    var query = `            
        SELECT AVG(duration)
        FROM public."Trips"
        where user_id=($1)	
    `
    return executeQuery(query, [user_id]);
}

// the places in the nearby radius of the place
TripRepository.getNearPlaces = function (Location) {
    var query = `            
    SELECT id, name, locations, area, duration, user_id, "ImageUrl", is_saved
	FROM public."Trips"	
	where 
	CAST( CAST( area[1] as text) as decimal)>($1) AND 
	CAST( CAST( area[2] as text) as decimal)>($2) AND	
	CAST( CAST( area[1] as text) as decimal)<($3) AND
	CAST( CAST( area[2] as text) as decimal)<($4)	
    `
    return executeQuery(query, [
        Location[0] - 5,
        Location[1] - 5,
        Location[0] + 5,
        Location[1] + 5]);
}

module.exports = TripRepository;
