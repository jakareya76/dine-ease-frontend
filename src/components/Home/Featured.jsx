import SectionHeading from "../Shared/SectionHeading";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="relative my-20 text-white bg-fixed"
    >
      <div className="absolute z-10 w-full h-full opacity-60 bg-zinc-800"></div>
      <div className="relative z-50 pt-12">
        <SectionHeading
          text="check it out"
          title="Featured Item"
        ></SectionHeading>
        <div className="items-center justify-center px-5 pb-20 mt-12 md:flex md:px-36">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="md:ml-10">
            <p>Aug 20, 2029</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              expedita hic dolorem, iusto vel suscipit nam excepturi debitis
              magnam nostrum! Ut eum dignissimos culpa doloremque eligendi
              consectetur blanditiis laboriosam fugiat ea quia similique quam
              nisi reprehenderit numquam magnam nemo vitae cupiditate, atque
              maiores dicta minus pariatur. Perspiciatis nobis vero quas?
            </p>
            <button className="px-5 py-2 mt-4 uppercase duration-300 border-0 border-b-2 hover:bg-white hover:text-zinc-900">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
