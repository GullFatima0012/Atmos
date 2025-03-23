import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

import AboutOne from "@/components/About/AboutOne";
import FeatureMovieOne from "@/components/Feature/FeatureMovieOne";

export default function Home() {
  return (
    <>
      <HeaderOne isHero={true} />
      <main className="main">

      <AboutOne/>
      <FeatureMovieOne/>
      </main>
      <FooterOne />
    </>
  );
}
