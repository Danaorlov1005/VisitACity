
const { executeQuery } = require('../DBAccess')

function addNewTrip(user_id, locations){
    user_id = user_id.toString() != {} ? user_id : null
    var query = `
        INSERT INTO public."Trips"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4,$5)
    `
    const values= ['new trip', locations.places, locations.area, locations.duration, user_id];

    return executeQuery(query, values);
}

module.exports = {addNewTrip}
