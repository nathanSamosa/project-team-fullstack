const express = require("express");
const {
    createPokemons,
    getPokemons,
    getPokemonRatings
} = require("../controllers/pokemon");

const router = express.Router()

router.get("/partyapi", createPokemons)
router.get("/", getPokemons)
router.get("/ratings", getPokemonRatings)

module.exports = router;