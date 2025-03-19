import Link from "next/link";
import Image from "next/image";

import logo from "@/../public/assets/images/logo.svg";

export default function FooterOne() {
  return (
  <footer className="footer-area pt-80 ">
      <div className="container">
        {/* <!-- Footer Top --> */}
        <div className="row footer-top row-gap-lg-4 row-gap-5">
          <div className="col-md-6 col-xl-4">
            <div className="footer-widget widget-about">
              <Link href="#" className="thumb d-inline-block">
                <Image src={logo} alt="logo" />
              </Link>
              <div className="details">
              <p style={{ color: "black !important" }} className="lh-1">Connected with us!</p>

                <ul className="social-media mt-3">
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                      >
                        <path
                          d="M13.2402 0.656738H15.6604L10.3731 6.69986L16.5932 14.9232H11.7229L7.90825 9.93578L3.54348 14.9232H1.12184L6.77721 8.45939L0.810173 0.656738H5.80416L9.25222 5.21542L13.2402 0.656738ZM12.3908 13.4746H13.7319L5.07547 2.02924H3.63639L12.3908 13.4746Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="16"
                        viewBox="0 0 8 16"
                        fill="none"
                      >
                        <path
                          d="M5.33899 9.16479H7.21792L7.9695 6.20547H5.33899V4.72581C5.33899 3.96424 5.33899 3.24615 6.84214 3.24615H7.9695V0.760389C7.72471 0.728391 6.7993 0.656738 5.82217 0.656738C3.78203 0.656738 2.33269 1.88253 2.33269 4.13373V6.20547H0.0779705V9.16479H2.33269V15.4534H5.33899V9.16479Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li className="social-media--item">
                    <Link href="#" className="social-media--link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8.59916 0.656738C9.43179 0.658114 9.85373 0.662524 10.2183 0.673378L10.3619 0.678068C10.5278 0.683965 10.6915 0.691364 10.8888 0.700612C11.6761 0.736991 12.2131 0.861531 12.6848 1.04465C13.1724 1.2327 13.5843 1.48671 13.9955 1.89795C14.4061 2.30919 14.6602 2.72227 14.8489 3.20873C15.0313 3.67977 15.1559 4.21741 15.1929 5.00473C15.2017 5.20203 15.2088 5.36569 15.2147 5.53159L15.2193 5.67519C15.2301 6.03975 15.2351 6.46176 15.2366 7.29442L15.2372 7.84606C15.2373 7.91346 15.2373 7.98301 15.2373 8.05477L15.2372 8.26349L15.2368 8.8152C15.2354 9.64783 15.231 10.0699 15.2201 10.4344L15.2154 10.578C15.2095 10.7439 15.2022 10.9076 15.1929 11.1048C15.1565 11.8922 15.0313 12.4292 14.8489 12.9008C14.6608 13.3886 14.4061 13.8004 13.9955 14.2116C13.5843 14.6223 13.1706 14.8763 12.6848 15.0649C12.2131 15.2474 11.6761 15.372 10.8888 15.409C10.6915 15.4178 10.5278 15.4249 10.3619 15.4307L10.2183 15.4354C9.85373 15.4462 9.43179 15.4511 8.59916 15.4528L8.04745 15.4534C7.98005 15.4534 7.9105 15.4534 7.83874 15.4534H7.63002L7.07831 15.4528C6.24568 15.4515 5.82368 15.4471 5.45912 15.4362L5.31552 15.4315C5.14961 15.4256 4.98596 15.4182 4.78867 15.409C4.00133 15.3726 3.46494 15.2474 2.99267 15.0649C2.50559 14.8769 2.09312 14.6223 1.68189 14.2116C1.27065 13.8004 1.01725 13.3867 0.828588 12.9008C0.645474 12.4292 0.521548 11.8922 0.484555 11.1048C0.475766 10.9076 0.468596 10.7439 0.462788 10.578L0.458135 10.4344C0.447311 10.0699 0.442376 9.64783 0.440778 8.8152L0.440681 7.29442C0.442058 6.46176 0.44646 6.03975 0.457313 5.67519L0.462012 5.53159C0.467908 5.36569 0.475307 5.20203 0.484555 5.00473C0.520926 4.21679 0.645474 3.68039 0.828588 3.20873C1.01663 2.72166 1.27065 2.30919 1.68189 1.89795C2.09312 1.48671 2.50621 1.23331 2.99267 1.04465C3.46432 0.861531 4.00072 0.737605 4.78867 0.700612C4.98596 0.69183 5.14961 0.684661 5.31552 0.678853L5.45912 0.674199C5.82368 0.663367 6.24568 0.658433 7.07831 0.656834L8.59916 0.656738ZM7.83874 4.35551C5.79457 4.35551 4.13944 6.01244 4.13944 8.05477C4.13944 10.0989 5.79637 11.7541 7.83874 11.7541C9.88288 11.7541 11.538 10.0972 11.538 8.05477C11.538 6.01064 9.88103 4.35551 7.83874 4.35551ZM7.83874 5.83522C9.0646 5.83522 10.0583 6.82861 10.0583 8.05477C10.0583 9.28064 9.0649 10.2743 7.83874 10.2743C6.61287 10.2743 5.61915 9.28101 5.61915 8.05477C5.61915 6.8289 6.6125 5.83522 7.83874 5.83522ZM11.723 3.24572C11.213 3.24572 10.7982 3.65998 10.7982 4.16991C10.7982 4.67986 11.2124 5.09475 11.723 5.09475C12.2329 5.09475 12.6478 4.68051 12.6478 4.16991C12.6478 3.65998 12.2322 3.24509 11.723 3.24572Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </li>
              
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="footer-widget">
             
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="footer-widget">
              <h4 className="widget-title text-uppercase lh-1">Help</h4>
              <ul className="footer-widget--list">
                <li className="footer-widget--item">
                  <Link href="about" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
                    About Us
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="pricing" className="footer-widget--link"  style={{ textDecoration: "none", color: "inherit" }}>
                    Pricing Plan
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="privacy-policy" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="faq" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
                    Faq
                  </Link>
                </li>
                <li className="footer-widget--item">
                  <Link href="pricing" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
                    Account & Billing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md-6 col-xl-3">
            <div className="footer-widget widget-more">
              <h4 className="widget-title text-uppercase">
                Download the App for <br /> streaming.
              </h4>
              <div className="d-xl-flex d-lg-block d-flex align-items-center gap-3 position-relative z-1">
                <Link
                  href="#"
                  className="hl-btn btn-base small-btn fs-18 fw-normal text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="22"
                    viewBox="0 0 17 22"
                    fill="none"
                  >
                    <path
                      d="M16.4408 7.22358C16.3198 7.31809 14.1836 8.52991 14.1836 11.2245C14.1836 14.3412 16.9019 15.4438 16.9832 15.4711C16.9707 15.5383 16.5514 16.9812 15.5501 18.4513C14.6572 19.745 13.7247 21.0367 12.3061 21.0367C10.8875 21.0367 10.5225 20.2071 8.88485 20.2071C7.28896 20.2071 6.72153 21.064 5.42395 21.064C4.12638 21.064 3.22099 19.8668 2.18001 18.3967C0.974225 16.6703 0 13.9884 0 11.4429C0 7.36009 2.63687 5.19478 5.23203 5.19478C6.61096 5.19478 7.76042 6.10627 8.62617 6.10627C9.45019 6.10627 10.7353 5.14017 12.304 5.14017C12.8986 5.14017 15.0348 5.19478 16.4408 7.22358ZM11.5593 3.4117C12.2081 2.63672 12.667 1.56141 12.667 0.486107C12.667 0.336992 12.6545 0.185777 12.6274 0.0639648C11.5718 0.103869 10.3159 0.771736 9.55867 1.65592C8.96412 2.33639 8.40921 3.4117 8.40921 4.50171C8.40921 4.66552 8.43633 4.82934 8.44885 4.88185C8.5156 4.89445 8.62408 4.90915 8.73256 4.90915C9.67967 4.90915 10.8708 4.27069 11.5593 3.4117Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Apps Store</span>
                </Link>
                <Link
                  href="#"
                  className="hl-btn trans-btn small-btn fs-18 fw-normal text-uppercase flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                  >
                    <path
                      d="M0.500002 20.1165V20.1156L0.500002 1.01253C0.500002 1.01249 0.500002 1.01236 0.500002 1.01233C0.500066 0.910857 0.530615 0.810752 0.589244 0.724242C0.591074 0.721542 0.59293 0.718858 0.59481 0.71619L10.6741 10.564L0.594806 20.4127C0.592763 20.4099 0.59075 20.407 0.588767 20.404C0.530201 20.3178 0.49981 20.2178 0.500002 20.1165ZM6.11951 17.868L12.1357 11.9917L13.7395 13.5582L6.11951 17.868ZM13.5974 10.564L15.5924 8.61627L18.2277 10.1073C18.3124 10.1553 18.3812 10.2233 18.4285 10.3034C18.4756 10.3835 18.5 10.4733 18.5 10.564C18.5 10.6547 18.4756 10.7445 18.4285 10.8245L18.8591 11.0785L18.4285 10.8245C18.3813 10.9045 18.3125 10.9725 18.2279 11.0205C18.2279 11.0205 18.2278 11.0206 18.2277 11.0206L15.5914 12.5117L13.5974 10.564ZM6.11837 3.25886L13.7405 7.56871L12.1357 9.13624L6.11837 3.25886Z"
                      stroke="white"
                    />
                  </svg>
                  <span>Play Store</span>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="row footer-bottom row-gap-3">
          <div className="col-sm-6 text-sm-start order-4 order-sm-0">
            <p style={{ color: "black !important" }} className="mb-0">© Atmos {new Date().getFullYear()}</p>
          </div>
          <div className="col-sm-6 footer-widget text-sm-end">
            <ul className="footer-widget--list">
              <li className="footer-widget--item d-inline-block mb-0 me-4">
                <Link href="privacy-policy" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
                  Privacy Policy
                </Link>
              </li>
              <li className="footer-widget--item d-inline-block">
  <Link href="/" className="footer-widget--link" style={{ textDecoration: "none", color: "inherit" }}>
    Site Maps
  </Link>
</li>

            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
