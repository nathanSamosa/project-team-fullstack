import { useState, useEffect } from 'react';

const URL = process.env.REACT_APP_API_URL;
const pokemonRatingsEndpoint = "/pokemon/ratings";
const pokemonRatingsURL = URL + pokemonRatingsEndpoint;


const HomeRatings = () => {
    const [rawData, setRawData] = useState([]);
    const [avgRatingsArr, setAvgRatingsArr] = useState([]);

    /* setting states of sorted arrays by rating type for all pokemon */

    let [sortedByDesign, setSortedByDesign] = useState([]);
    let [sortedByStrength, setSortedByStrength] = useState([]);
    let [sortedByCompanion, setSortedByCompanion] = useState([]);

    /* function to calculate the average rating by type used in returnAvgRatings function */

    const calcAvg = (type, ratingArr) => {
        let ratingSum = 0;
        for (let i = 0; i < ratingArr.length; i++) {
            ratingSum = ratingSum + ratingArr[i][type];
        }
        let ratingAvg = ratingSum / ratingArr.length;
        return parseFloat(ratingAvg.toFixed(1));
    }

/* function that returns an array of all pokemons with their avg for each rating type */

    const returnAverageRatingsArr = (arr) => {
        const newArr = [];

        let pokeAvgRatingObj = {
            name: "",
            art: "",
            avgDesign: 0,
            avgCompanion: 0,
            avgStrength: 0
        }
        for (let i = 0; i < arr.length; i++) {
            pokeAvgRatingObj.name = arr[i].name;
            pokeAvgRatingObj.art = arr[i].art;
            pokeAvgRatingObj.avgDesign = calcAvg("design", arr[i].rating);
            pokeAvgRatingObj.avgCompanion = calcAvg("companion", arr[i].rating);
            pokeAvgRatingObj.avgStrength = calcAvg("strength", arr[i].rating);
            newArr.push({...pokeAvgRatingObj});
        }

        setAvgRatingsArr(newArr);
    }

    /* function that sorts the pokemons by given rating type */

    const sortByRatingType = (type, arr) => {
        const newArr = [...arr]
        let sortedArray = newArr.sort((a, b) => {
            return b[type] - a[type];
        });
        return sortedArray;
    }

    const getPokemonRatings = async () => {
        fetch(pokemonRatingsURL)
            .then((res) => res.json())
            .then((data) => {
                setRawData(data.pokemonRatingData);
            })
    }

    useEffect(() => {
        getPokemonRatings();
    }, []);

    useEffect(() => {
        if (rawData) {
            returnAverageRatingsArr(rawData);
        }
    }, [rawData]);

    useEffect(() => {
        if (avgRatingsArr) {
            const design = sortByRatingType("avgDesign", avgRatingsArr);
            const strength = sortByRatingType("avgStrength", avgRatingsArr);
            const companion = sortByRatingType("avgCompanion", avgRatingsArr);

            setSortedByDesign(design);
            setSortedByStrength(strength);
            setSortedByCompanion(companion);
        }
    }, [avgRatingsArr])
    console.log(sortedByStrength);
    console.log(sortedByDesign);
    console.log(sortedByCompanion);

    return (

        <div className="ratingContainer">
            <h2>Strength</h2>

            {sortedByStrength.length &&
                <img src={sortedByStrength[0].art} alt={sortedByStrength[0].name} />
            }
            <h2>Design</h2>

            {sortedByDesign.length &&
                <img src={sortedByDesign[0].art} alt={sortedByDesign[0].name} />
            }

            <h2>Companionship</h2>

            {sortedByDesign.length &&
                <img src={sortedByCompanion[0].art} alt={sortedByCompanion[0].name} />
            }

        </div>
    )
}

export default HomeRatings;