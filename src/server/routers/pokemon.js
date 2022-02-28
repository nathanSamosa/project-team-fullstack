const express = require("express");
const {
    createPokemons,
    getPokemons
} = require("../controllers/pokemon");

const router = express.Router()

router.get("/partyapi", createPokemons)
router.get("/", getPokemons)

module.exports = router;