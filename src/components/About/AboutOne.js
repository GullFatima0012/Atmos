import Image from "next/image";
import data from "@/data/about";

export default function AboutOne() {
  return (
    <div className="genres-area" style={{ backgroundColor: "#F1EFE7", color: "black" }}>
    <div className="about-us container py-80" style={{ backgroundColor: "#F1EFE7", color: "black" }}>
      <div className="row justify-content-center" style={{ backgroundColor: "#F1EFE7", color: "black" }}>
        <div className="col-lg-7 text-center" style={{ backgroundColor: "#F1EFE7", color: "black" }}>
          <h3 className="section-title large mb-1" style={{ backgroundColor: "#F1EFE7", color: "black" }}>{data.title}</h3>
          <p className="mb-5" style={{ backgroundColor: "#F1EFE7", color: "black" }}>{data.descriptionOne}</p>
 
        </div>
        </div>
      </div>
    </div>
  );
}
