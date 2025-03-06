import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

import CategoryOne from "@/components/Category/CategoryOne";

export default function Home() {
  return (
    <>
      <HeaderOne isHero={true} />
      <main className="main">
        <CategoryOne />
      </main>
      <FooterOne />
    </>
  );
}
