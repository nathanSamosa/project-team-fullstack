import HomeRatings from "./HomeRatings";
import HomePosts from "./HomePosts";

const HomeMain = () => {
  return (
    <section className="mainContainer">
      <HomePosts />
      <HomeRatings />
    </section>
  );
};

export default HomeMain;
