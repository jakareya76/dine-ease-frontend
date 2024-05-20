import Banner from "../components/Home/Banner";
import Category from "../components/Home/Category";
import PopularMenu from "../components/Home/PopularMenu";

import bannerImg from "../assets/home/banner.jpg";
import Featured from "../components/Home/Featured";
import Testimonials from "../components/Home/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Dine Ease | Home</title>
      </Helmet>
      <Banner />
      <main className="container mx-auto">
        <Category />
        <div
          style={{ backgroundImage: `url(${bannerImg})` }}
          className="object-cover p-10 bg-center bg-cover rounded-md md:p-36"
        >
          <div className="p-5 text-center bg-white md:p-20">
            <h2 className="font-serif text-4xl font-thin">Bistro Boss</h2>
            <p className="max-w-xl mx-auto my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
        <PopularMenu />
        <div className="px-5 py-10">
          <div className="flex items-center justify-center p-20 bg-[#151515] rounded">
            <h2 className="text-3xl font-semibold text-white">
              Call Us: +88 0192345678910
            </h2>
          </div>
        </div>
        <Featured />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
