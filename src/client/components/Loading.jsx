import pokeball from "../assets/pokeball.png";

import "../styling/loading.css";

const Loading = () => {
    return (
        <div className="spinnerContainer">
            <img src={pokeball} alt="pokeball"></img>
        </div>
    )
}

export default Loading;