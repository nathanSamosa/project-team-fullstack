import HomeRatings from "./HomeRatings";
import HomePosts from "./HomePosts";

const HomeMain = (props) => {
  const {setLoading} = props;

  return (
    <section className="mainContainer">
      <HomePosts setLoading={setLoading}/>
      <HomeRatings />
    </section>
  );
};

export default HomeMain;
