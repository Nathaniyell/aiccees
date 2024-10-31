import mecs from "@/public/images/home/mecs.svg";
import asteven from "@/public/images/home/asteven.svg";
import enerpro from "@/public/images/home/enerpro.svg";
import trans from "@/public/images/home/trans.svg";
import uniport from "@/public/images/home/unipor.svg";

// //// SWIPER IMPORTS /////// //
import { Pagination, Scrollbar, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";

export const sponsors_list = [
  { id: 1, image: mecs },
  { id: 2, image: asteven },
  { id: 3, image: enerpro },
  { id: 4, image: trans },
  { id: 5, image: uniport },
];

function SponsorsCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      //   slidesPerView={3}
      autoplay={{
        delay: 2500,
        // disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },

        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      
    >
      {sponsors_list.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red"
          }}
        >
          <Image
            src={item.image}
            alt={`sponsor image ${item.id}`}
            className="w-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SponsorsCarousel;
