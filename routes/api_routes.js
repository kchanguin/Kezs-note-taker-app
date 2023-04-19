const router = require('express').Router();
const fs = require ('fs');


router.get('/api/notes', async (req, res) => {
const dbJson = await JSON.parse ((fs.readFileSync("db.db.json")))
res.json(dbJson)
})