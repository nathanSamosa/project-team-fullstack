import { useState, useEffect } from "react";

import "../styling/pokedex.css"
import ratingStar from "../assets/star.png"
import ratingStarHollow from "../assets/Star_Outline_2.png"

const URL = process.env.REACT_APP_API_URL;
const pokemonEndpoint = "/pokemon";
const pokemonURL = URL + pokemonEndpoint;


const Pokedex = () => {
    const [pokeArr, setPokeArr] = useState([])
    
    const getPokemons = async() => {
        console.log(pokemonURL)
        const res = await fetch(pokemonURL);
        const data = await res.json();
        console.log(data)
        setPokeArr(data.data)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const pokePad = index => {
        const str = "" + index;
        const pad = "000"
        return pad.substring(0, pad.length - str.length) + str;
    }
    
    const averageRating = pokemon => {
        const ratingsTotal = pokemon.strength + pokemon.companion + pokemon.design
        return Math.round(ratingsTotal/3)
    }

    return (
        <main id="pokedexMain">
            <aside id="aside"></aside>
            <div id="pokedex">
                <div id="pokedexDisplay">
                    {pokeArr && 
                        pokeArr.map((pokemon, index) => {
                            return (<>
                                <div className="pokedexCell">
                                    <div>
                                        <h2>{pokemon.name}</h2>
                                        <p>{`#${pokePad(pokemon.id)}`}</p>
                                    </div>
                                    <div className="pokedexImgContainer"><img src={pokemon.art} /></div>
                                    <div className="pokedexTypes">
                                        <h3 style={{backgroundColor: `rgba(var(--clr-type-${pokemon.typePrimary}), 0.75)`}}>
                                            {pokemon.typePrimary}
                                        </h3>
                                        {pokemon.typeSecondary &&
                                            <h3 style={{backgroundColor: `rgb(var(--clr-type-${pokemon.typeSecondary}), 0.75)`}}>
                                                {pokemon.typeSecondary}
                                            </h3>
                                        }
                                    </div>
                                    {/* TEMPORARY HARDCODED RATINGS */}
                                    <div className="pokedexRating">
                                            {[...Array(averageRating(pokemon.rating[0]))].map(star => {
                                                return (
                                                    <img src={ratingStar}></img>
                                                )
                                            })}
                                            {[...Array(5 - averageRating(pokemon.rating[0]))].map(star => {
                                                return (
                                                    <img src={ratingStarHollow}></img>
                                                )
                                            })}
                                    </div>
                                    <aside className="pokedexDetails">
                                        <h4>Combat</h4>
                                        <div className="detailsStars">

                                            {[...Array(pokemon.rating[0].strength)].map(star => {
                                                return (
                                                    <img src={ratingStar}></img>
                                                )
                                            })}
                                            {[...Array(5 - pokemon.rating[0].strength)].map(star => {
                                                return (
                                                    <img src={ratingStarHollow}></img>
                                                )
                                            })}

                                        </div>
                                        <h4>Companionship</h4>
                                        <div className="detailsStars">
                                            
                                            {[...Array(pokemon.rating[0].companion)].map(star => {
                                                return (
                                                    <img src={ratingStar}></img>
                                                )
                                            })}
                                            {[...Array(5 - pokemon.rating[0].companion)].map(star => {
                                                return (
                                                    <img src={ratingStarHollow}></img>
                                                )
                                            })}

                                        </div>
                                        <h4>Design</h4>
                                        <div className="detailsStars">
                                            
                                            {[...Array(pokemon.rating[0].design)].map(star => {
                                                return (
                                                    <img src={ratingStar}></img>
                                                )
                                            })}
                                            {[...Array(5 - pokemon.rating[0].design)].map(star => {
                                                return (
                                                    <img src={ratingStarHollow}></img>
                                                )
                                            })}

                                        </div>
                                    </aside>
                                </div>
                                
                            </>)
                        })
                    }

                </div>
            </div>
        </main>
    )
}

export default Pokedex