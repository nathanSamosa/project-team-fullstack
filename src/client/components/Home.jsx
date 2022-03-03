import "../styling/homePage.css";
import HomeMain from "./homeComponents/HomeMain";

const Home = (props) => {
  const {setLoading} = props;

  return (
    <div className="homePage">
      <HomeMain setLoading={setLoading}/>
    </div>
  );
};

export default Home;
