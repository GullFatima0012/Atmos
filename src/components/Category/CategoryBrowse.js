"use client";
import CategoryCard from "@/components/Card/CategoryCard";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      const fecthCategories = async () => {
        const response = await fetch("https://api.vimeo.com/categories", {
          headers: {
            Authorization: `Bearer 9e60951cd4b1c4c98a1e159c43eafd59`,
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
  <div className="genres-area py-80" style={{ backgroundColor: "#F1EFE7" }} >
      <h3 className="section-title text-dark text-center mb-1">Browse by category </h3>
      {categories && categories.length > 0 && (
        <div className="row mt-4 row-gap-4">
          {categories.map((category, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-sm-6 ">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
