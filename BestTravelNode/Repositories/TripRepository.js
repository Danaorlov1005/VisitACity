
const { executeQuery } = require('../DBAccess')

function addNewTrip(data){
    
    var query = `
        INSERT INTO public."Trips"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4)
    `

    const values= ['new trip',data.places, data.area, data.duration];

    return executeQuery(query, values);
}

module.exports = {addNewTrip}
