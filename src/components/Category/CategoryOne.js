"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CategoryCard from "@/components/Card/CategoryCard";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function CategoryOne() {
  const swiperOptions = {
    speed: 5000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: { slidesPerView: "1" },
      576: { slidesPerView: "2" },
      768: { slidesPerView: "2" },
      992: { slidesPerView: "3" },
      1200: { slidesPerView: "4" },
      1500: { slidesPerView: "5" },
      1700: { slidesPerView: "6", spaceBetween: 30 },
    },
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const fecthCategories = async () => {
        const response = await fetch("https://api.vimeo.com/categories", {
          headers: {
            Authorization: `Bearer abd8e7cb9bdeff107bb9bb03c6e05505`,
          },
        });

        const data = await response.json();

        setCategories(data?.data);
      };
      fecthCategories();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="category pt-80 pb-80 mt-10">
      <div className="container mb-45">
        <div className="d-flex justify-content-center mb-40">
          <div className="section-header">
            <h3 className="section-title mt-2 mb-0 lh-1">Browse by category</h3>
          </div>
        </div>
      </div>
      {categories && categories.length > 0 && (
      <Swiper {...swiperOptions} className="swiper categories-slider" style={{ backgroundColor: "#7272726B" }}>

          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard  style={{ backgroundColor: "#7272726B !important"}} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
