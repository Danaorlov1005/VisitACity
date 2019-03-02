
const { Pool, Client } = require('pg')

async function executeQuery(query, params) {

    const client = new Client({
        user: 'twfnggzo',
        host: 'manny.db.elephantsql.com',
        database: 'twfnggzo',
        password: 'K3Io6cuZK0D-Cr18ta89JRJ3uhdvFE4u',
        port: 5432,
    })

    await client.connect();

    let res = await client.query(query, params);
    await client.end();

    return res["rows"];

}


var exports = module.exports = { executeQuery };

