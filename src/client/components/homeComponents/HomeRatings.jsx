import pikachuImg from "../../assets/pikachuTest.png";

const HomeRatings = () => {
    return (
        <div className="ratingContainer">
            <h2>Strength</h2>
            <img src={pikachuImg} alt="Pikachu" />
            <h2>Design</h2>
            <img src={pikachuImg} alt="Pikachu" />
            <h2>Companionship</h2>
            <img src={pikachuImg} alt="Pikachu" />
        </div>
    )
}

export default HomeRatings;