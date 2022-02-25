const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

const pokemonNumber = 151;
const pokeArr = [];

const password = process.env.JWT_SECRET

const createSinglePoke = (pokemon, arrIndex) => {
    console.log(pokemon.species.name)
    pokeArr.push({
        name: pokemon.species.name,
        art: pokemon.sprites.other.dream_world.front_default,
        typePrimary: pokemon.types[0].type.name
    })

    if (pokemon.types[1]) {
        pokeArr[arrIndex] = { ...pokeArr[arrIndex], typeSecondary: pokemon.types[1].type.name }
    }
}

const getPokeApi = async () => {
    for (let i = 1; i < pokemonNumber + 1; i++) {
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            createSinglePoke(result.data, i - 1);
        } catch (e) {
            console.log("error", e);
        }
    }
}

const createPokemons = async (req, res) => {
    const {
        createPassword
    } = req.body

    if (createPassword === password) {
        console.log("fetching pokemon...")
        await getPokeApi();

        const pokemons = await prisma.pokemon.createMany({
            data: pokeArr
        })

        console.log("pokemons created", pokemons)
        res.json({ data: pokemons })
    }
    res.json("No Access")
}



module.exports = {
    createPokemons
}