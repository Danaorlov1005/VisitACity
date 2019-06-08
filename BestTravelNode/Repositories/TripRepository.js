
const { executeQuery } = require('../DBAccess')

function addNewTrip(data){
    
    var query = `
        INSERT INTO public."Trips"
        VALUES(nextval('trips_seq'),$1,$2,$3,$4)
    `

    const values= ['מור בדיקה 3',['{"x": "4.6", "y":"7.8"}'], null, 4 ];

    return executeQuery(query, values);
}

module.exports = {addNewTrip}
