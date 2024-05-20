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
        <div className="px-5 py-10">
          <div className="flex items-center justify-center p-20 bg-[#151515] rounded">
            <h2 className="text-3xl font-semibold text-white">
              Call Us: +88 0192345678910
            </h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
