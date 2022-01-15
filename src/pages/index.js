
import Image from "next/image";
import React from "react";
import SwiperCore, {
  EffectCube, Pagination
} from 'swiper';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules
SwiperCore.use([EffectCube,Pagination]);


export default function App() {
  return (
    
    <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          "shadow": true,
          "slideShadows": true,
          "shadowOffset": 20,
          "shadowScale": 0.94
        }}
        pagination={true}
        className="mySwiper"
    >
        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" layout="fill" />
        </SwiperSlide>

        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" layout="fill" />
        </SwiperSlide>

        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" layout="fill" />
        </SwiperSlide>

        <SwiperSlide>
            <Image src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" layout="fill" />
        </SwiperSlide>
    </Swiper>
    
  )
}