import Banner from "../components/Banner";
import Category from "../components/Category";

const Home = () => {
  return (
    <>
      <Banner />
      <main className="container mx-auto">
        <Category />
      </main>
    </>
  );
};

export default Home;
