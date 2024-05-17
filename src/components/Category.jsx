import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";

import slide1 from "../assets/home/slide1.jpg";
import slide2 from "../assets/home/slide2.jpg";
import slide3 from "../assets/home/slide3.jpg";
import slide4 from "../assets/home/slide4.jpg";
import slide5 from "../assets/home/slide5.jpg";
import SectionHeading from "./SectionHeading";

const Category = () => {
  return (
    <section className="px-5 py-20">
      <SectionHeading title="ORDER ONLINE" text="From 11:00am to 10:00pm" />
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" className="w-full" />
          <h2 className="-mt-20 pb-8 text-2xl font-[200] text-center text-white uppercase font-inter">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide" className="w-full" />
          <h2 className="-mt-20 pb-8 text-2xl font-[200] text-center text-white uppercase font-inter">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide" className="w-full" />
          <h2 className="-mt-20 pb-8 text-2xl font-[200] text-center text-white uppercase font-inter">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slide" className="w-full" />
          <h2 className="-mt-20 pb-8 text-2xl font-[200] text-center text-white uppercase font-inter">
            desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slide" className="w-full" />
          <h2 className="-mt-20 pb-8 text-2xl font-[200] text-center text-white uppercase font-inter">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
