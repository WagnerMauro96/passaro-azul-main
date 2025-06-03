import { FirstImag, FifthImage, FourthImage, SeventhImage, SixthImage, ThirdImage } from "@/assets/common";
import Image from "next/image";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function MobileGallery() {
  const images = [
    FirstImag,
    FifthImage,
    FourthImage,
    SeventhImage,
    SixthImage,
    ThirdImage
  ];

  return (
    <Swiper
      allowSlideNext
      allowSlidePrev
      slidesPerView={1}
      style={{
        width: "100%",
      }}
      spaceBetween={0}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[A11y, Autoplay, Navigation]}
      className="mySwiper"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="w-[25rem] h-[25rem] overflow-hidden">
            <Image
              src={image}
              className="object-cover hover:scale-110 transition-all grayscale hover:grayscale-0 w-full h-full"
              alt={`Image ${index}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
