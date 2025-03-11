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
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // ✅ Added success state

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      setSuccess(null); // Reset both states before fetching

      try {
        const response = await fetch("https://api.vimeo.com/categories", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESS_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setCategories(data?.data || []);
        setSuccess("Connected successfully! ✅"); // ✅ Set success message
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="genres-area py-80" style={{ backgroundColor: "#F1EFE7" }}>
      <div className="container mb-45">
        <div className="d-flex justify-content-center mb-40">
          <div className="section-header">
            <h3 className="section-title mt-2 mb-0 lh-1 text-dark">Browse by Category</h3>
          </div>
        </div>
      </div>



      {/* Show Swiper only if categories exist and no error */}
      {!error && categories.length > 0 && (
        <Swiper {...swiperOptions} className="swiper categories-slider">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard style={{ backgroundColor: "#7272726B !important" }} category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
