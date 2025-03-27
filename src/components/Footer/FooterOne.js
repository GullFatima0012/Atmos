"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "@/../public/assets/images/logo.svg";

const FooterOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial size
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <footer 
      style={{
        width: '100%', // Changed from 'vw' to '%'
        marginTop: 'auto',
        fontFamily: '"SF Pro Display", sans-serif' ,
        backgroundColor: '#F1EFE7', 
        borderRadius: '10px', 
        padding: isMobile ? '15px' : '20px 30px',
        backgroundImage: 'linear-gradient(to bottom, rgba(112, 109, 109, 0.42), white), linear-gradient(to top left, rgba(112, 109, 109, 0.42), white)',
      }}
    >
      <div style={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'center' : 'flex-start',
        width: '100%', 
        maxWidth: '1200px',
        margin: '0 auto', // Center the content
        textAlign: isMobile ? 'center' : 'left'
      }}>
        {/* First Column - Logo and Social Links */}
        <div style={{ 
          marginBottom: isMobile ? '20px' : '0',
          width: isMobile ? '100%' : 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isMobile ? 'center' : 'flex-start' }}>
            <Image src={logo} alt="logo" width={150} height={50} />
            <p style={{ margin: '10px 0', color: 'black' }}>Connected with us!</p>
            <div style={{ 
              display: 'flex', 
              gap: '10px',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              {/* Social Links */}
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
              {/* Add other social links similarly */}
            </div>
          </div>
        </div>
        
        {/* Help Links Column */}
        <div style={{ 
          width: isMobile ? '100%' : 'auto',
          marginBottom: isMobile ? '20px' : '0'
        }}>
          <h4 style={{ 
            marginBottom: '15px', 
            fontFamily: '"SF Pro Display", sans-serif' ,
            textTransform: 'uppercase', 
            fontWeight: 'bold', 
            color: 'black',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            HELP
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            fontFamily: '"SF Pro Display", sans-serif' ,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : 'flex-start'
          }}>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/about" style={{ color: 'black', textDecoration: 'none' }}>About Us</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <Link href="/pricing" style={{ color: 'black', textDecoration: 'none' }}>Pricing Plan</Link>
            </li>
            <li>
              <Link href="/privacy-policy" style={{ color: 'black', textDecoration: 'none' }}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{ 
        marginTop: '20px', 
        paddingTop: '15px', 
        fontFamily: '"SF Pro Display", sans-serif' ,
        display: 'flex', 
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: 'black' }}>© Atmos 2025</p>
      </div>
    </footer>
  );
};

export default FooterOne;