import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const PokedexRating = ({pokemon, stat}) => {

    const [rating, setRating] = useState(pokemon.rating[0][stat]);
    const [hover, setHover] = useState(null)

    const calcData = ratingValue => {
        if (ratingValue <= rating) return "filled"
        if (ratingValue <= hover) return "hovered"
        return "hollow"
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
                            onClick={() => setRating(ratingValue)}
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