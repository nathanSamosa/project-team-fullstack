const express = require("express");
const {
    createPokemons
} = require("../controllers/pokemon");

const router = express.Router()

router.get("/partyapi", createPokemons)


module.exports = router;