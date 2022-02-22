const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

const pokemonNumber = 151;
const pokeArr = []

const createSinglePoke = async(pokemon) => {
    pokeArr.push({
        name: pokemon.species.name
    })
}

const createPokemons = async(res) => {
    const pokemons = await prisma.pokemon.createMany({
        data: pokeArr
    })

    console.log("pokemons created", pokemons)
    res.json({ data: pokemons})
}

const getPokeApi = async (req, res) => {
    for(let i = 1; i < pokemonNumber + 1; i++) {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            createSinglePoke(result.data);
        } catch (e) {
            console.log("error", e);
        }
    }

    createPokemons(res);
}

module.exports = {
    getPokeApi
}