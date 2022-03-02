import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="homeHeader">
            <div className="headerTitle"></div>
            <div className="headerNav">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/ratings">Ratings</Link></li>
            </ul>
            </div>
        </header>
    )
}

export default Header;