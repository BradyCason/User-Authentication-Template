const db = require("../db/queries");

async function sampleGet(req, res) {
    const response = await db.sampleQuery();
    res.send("Response from query: " + response.map(i => i.id).join(", "));
}

function indexGet(req, res) {
    res.render("index", {
        title: "Webpage"
    })
}

module.exports = {
    sampleGet,
    indexGet
}