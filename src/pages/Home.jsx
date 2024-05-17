import Banner from "../components/Banner";
import Category from "../components/Category";
import PopularMenu from "../components/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="container mx-auto">
        <Category />
        <PopularMenu />
      </main>
    </>
  );
};

export default Home;
