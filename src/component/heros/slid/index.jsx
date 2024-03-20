import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './styles.css';

export default function Slid({ images, paragraphs }) {
  return (
    <>
      <div id='app'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
      >
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: images[index] }}>
            <p>{paragraphs[index]}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </>
  );
}
