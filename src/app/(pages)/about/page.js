import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import AboutOne from "@/components/About/AboutOne";

export default function About() {
  const breadcrumb = {
    title: "About Us",
    links: [
 
    ],
  };
  return (
    <>
    <HeaderOne style={{ color: "black" }} data={{ breadcrumb: breadcrumb }} />


      <main className="main">
        <AboutOne />
      </main>
      <FooterOne />
    </>
  );
}
