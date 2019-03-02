
const { Pool, Client } = require('pg')

async function executeQuery(query, params) {

    const client = new Client({
        user: 'kwwwxjgg',
        host: 'manny.db.elephantsql.com',
        database: 'kwwwxjgg',
        password: 'Bmp6XEosDL9hdv0MoEAfWp_DHFAoz35k',
        port: 5432,
    })

    await client.connect();

    let res = await client.query(query, params);
    await client.end();

    return res["rows"];

}


var exports = module.exports = { executeQuery };

