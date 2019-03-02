const { executeQuery } = require('../DBAccess')

function getPopularSites(){
    let query = `
        SELECT * 
        FROM public."POPULAR_SITES"
    ` 

    return executeQuery(query, []);
}

module.exports= {getPopularSites}