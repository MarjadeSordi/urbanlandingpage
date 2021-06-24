import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import '../Swiper/swipper.css';

import SwiperCore, { Pagination } from 'swiper/core';
import teste from '../../assets/teste.jpeg';
import { SwipperImg, TituloDepo } from '../../style/components/Swiper';

SwiperCore.use([Pagination]);

const SwiperDepoimentos = () => {
  return (
    <>
      <TituloDepo> Depoimentos de nossos clientes </TituloDepo>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <SwipperImg src={teste} />{' '}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperDepoimentos;
