"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCards, Scrollbar } from "swiper/modules";

import Link from "next/link";
import { heroOneData as data } from "@/data/hero";
import Image from "next/image";
import dynamic from "next/dynamic";
const VideoTwo = dynamic(() => import("@/components/Video/VideoTwo"), {
  ssr: false,
});

export default function HeroOne() {
  const swiperHeroOptions = {
    speed: 1500,
    slidesPerView: "auto",
    initialSlide: "2",
    spaceBetween: "-70",
    centeredSlides: "true",
    slideToClickedSlide: "true",
    clickable: "true",
    allowTouchMove: "false",
    loop: "true",
    autoplay: {
      delay: 10000,
    },
    navigation: {
      prevEl: ".prev-slide",
      nextEl: ".next-slide",
    },
 
    modules: [Autoplay, Pagination, Navigation],
  };


  return (
    <>
      {data.slides && data.slides.length > 0 && (
        <Swiper {...swiperHeroOptions} className="swiper hero-slider-one  w-100">
          {data.slides.map((slide, index) => (
       <SwiperSlide
       key={index}
       className="home-one-slider w-full swiper-slide"
       style={{minWidth: "100%"}}
     >

 
           
  <iframe
    src="https://player.vimeo.com/video/1064196343?h=25f6810187&amp;autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
    style={{
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
    }}
    
  ></iframe>


<div className="thumb">
</div>
             
              <div className="container position-absolute top-50 start-50 translate-middle mt-5">
                <div className="row justify-content-lg-between justify-content-center">
                  <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                    <div className="content text-center text-lg-start">
                   
                    <h2 className="banner-title fw-bold text-uppercase text-white">
                        {"360 Video 2"}
                      </h2>
                      <p className="banner-description pe-xl-5 me-xl-5">{slide.description}</p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

   
    </>
  );
}