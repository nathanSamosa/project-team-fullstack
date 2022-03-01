import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const URL = process.env.REACT_APP_API_URL;
const registerEndpoint = "/rating/";
const registerURL = URL + registerEndpoint;

const PokedexRating = ({pokemon, stat, getPokemons}) => {

    const [rating, setRating] = useState(pokemon.rating[0][stat]);
    const [hover, setHover] = useState(null)

    const calcData = ratingValue => {
        if (ratingValue <= rating) return "filled"
        if (ratingValue <= hover) return "hovered"
        return "hollow"
    }

    const postRating = async(ratingValue) => {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: pokemon.rating[0].id,
                stat: stat,
                ratingValue: ratingValue
            })
        }
        const result = await fetch(registerURL, fetchOptions)
        const data = await result.json()
        return data
    }

    const handleClick = async(ratingValue) => {
        await postRating(ratingValue)
        getPokemons()
        setRating(ratingValue)
    }
    
    return (
        <div className="detailsStars">

            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label>
                        <input
                            className="ratingButton"
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => handleClick(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            size={30}
                            data={calcData(ratingValue)}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}


        </div>
    )
}

export default PokedexRating