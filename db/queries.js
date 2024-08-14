const pool = require("./pool");

async function sampleQuery() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

module.exports = {
    sampleQuery
};