const pool = require("./pool");

async function sampleQuery() {
    const { rows } = await pool.query(`SELECT * FROM users`);
    return rows;
}

async function addUser(firstName, lastName, email, hashedPassword, membershipStatus) {
    pool.query(`INSERT INTO users (firstName, lastName, email, password, membershipStatus) VALUES ($1, $2, $3, $4, $5)`, [
        firstName,
        lastName,
        email,
        hashedPassword,
        membershipStatus
    ]);
}

async function findUserByEmail(email){
    const { rows } = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return (rows)
}

module.exports = {
    sampleQuery,
    addUser,
    findUserByEmail
};