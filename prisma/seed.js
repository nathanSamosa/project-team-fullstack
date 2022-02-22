const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fetch = require('node-fetch');

async function seed() {
    await createPokemons();
    process.exit(0);
}

async function createPokemons() {
    await fetchPokemons()

    pokeArr.forEach()
    const poke = await prisma.pokemon.create({
        data: {
            name: "test"
        }
    })

    console.log("Pokemon", poke)
}

seed()
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));