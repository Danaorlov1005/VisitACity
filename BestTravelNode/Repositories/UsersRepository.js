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
    const values = [data.userId]

    return executeQuery(query, values)
}

function addNewUser(data){
    var query = `
        INSERT INTO public."Users"
        VALUES(nextval('users_seq'),$1,$2)
    `
    return executeQuery(query, [data.UserName, data.Password]);
}

function getUser(data){
    let query = `
    SELECT * 
    FROM public."Users" u
    WHERE u."UserName" = $1
    AND u."Password" = $2
` 
    return executeQuery(query, [data.UserName, data.Password]);
}
module.exports = {getTripsForUser, addNewUser, getUser}
