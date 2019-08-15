const { executeQuery } = require('../DBAccess')

function getTripsForUser(data){
    let query =`
    SELECT id, name, locations, area, duration, user_id, "ImageUrl", is_saved
	FROM public."Trips"	
	WHERE user_id = $1 AND is_saved = true
    `
    return executeQuery(query, [data.UserName])
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
