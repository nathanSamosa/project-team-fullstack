const express = require("express");
const {
    getPokeApi
} = require("../controllers/pokemon");

const router = express.Router()

router.get("/partyapi", getPokeApi)


module.exports = router;