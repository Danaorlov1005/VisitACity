const { executeQuery } = require('../DBAccess')

function getTripsForUser(data){
    let query =`
        SELECT t."id", t."locations", t."name", t."area", t."duration"
        FROM public."TRIP_USER" tu,
            public."Trips" t,
            public."Users" u
        WHERE tu."TRIP_ID" = t."id" AND
              tu."USER_ID" = $1
    `
    //const values=[data.userId]
    const values = [1]

    return executeQuery(query, values)
}

module.exports = {getTripsForUser}
