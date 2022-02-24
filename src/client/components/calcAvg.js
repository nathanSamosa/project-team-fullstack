import { useState } from "react";
const url = process.env.REACT_APP_API_URL

const [strengthAvg, setStrengthAvg] = useState(0)
const [companionAvg, setCompanionAvg] = useState(0)
const [designAvg, setDesignAvg] = useState(0)
const [ratingsArray, setRatingsArray] = useState([])

const fetchRatings = () => {
    const ratingUrl = url + "/rating"

    fetch(ratingUrl)
    .then(res => res.json)
    .then(data => setRatingsArray(data))
}

const calculateAverages = () => {
    const calculateStrength = () => {
        let strengthTotal = 0;
        for(let i = 0; i < ratingsArray.length; i++) {
            strengthTotal = strengthTotal + ratingsArray[i].strength
        }
        let strengthAverage = strengthTotal/ratingsArray.length
        setStrengthAvg(strengthAverage)
    }
    const calculateCompanion = () => {
        let companionTotal = 0;
        for(let i = 0; i < ratingsArray.length; i++) {
            companionTotal = companionTotal + ratingsArray[i].companion
        }
        let companionAverage = companionTotal/ratingsArray.length
        setCompanionAvg(companionAverage)
    }
    const calculateDesign = () => {
        let designTotal = 0;
        for(let i = 0; i < ratingsArray.length; i++) {
            designTotal = designTotal + ratingsArray[i].design
        }
        let designAverage = designTotal/ratingsArray.length
        setDesignAvg(designAverage)
    }
}