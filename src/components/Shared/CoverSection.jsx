import { Parallax } from "react-parallax";

const CoverSection = ({ img, title, text }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="p-10 rounded-md md:p-36">
        <div className="p-5 text-center rounded bg-[#000000a1] text-white md:p-20">
          <h2 className="font-serif text-4xl font-thin uppercase">{title}</h2>
          <p className="max-w-xl mx-auto my-2 text-2xl font-thin font-inter">
            {text}
          </p>
        </div>
      </div>
    </Parallax>
  );
};

export default CoverSection;
