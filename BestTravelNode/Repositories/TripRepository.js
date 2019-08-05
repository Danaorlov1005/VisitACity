
const { executeQuery } = require('../DBAccess')

function saveTrip(locations, user_id, imageUrl, city){
    user_id = user_id.toString() != {} ? user_id : null
    var query = `
        INSERT INTO public."Trips"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4,$5,$6)
        `
        // RETURNING id

    const values= [city, locations.places, locations.area, locations.duration, user_id, imageUrl];

    return executeQuery(query, values);
}

function markTripAsSaved(trip_id){

}

module.exports = {saveTrip}
