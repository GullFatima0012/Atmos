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
    <div className="container py-80 "  >
      <h3 className="section-title lh-1 text-center mb-1">Browse by category </h3>
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
