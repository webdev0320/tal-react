"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const Partners = () => {
  const partners = [
    { src: "/images/2023/06/A.webp", alt: "Partner Logo A" },
    { src: "/images/2023/06/ACCA.webp", alt: "ACCA" },
    { src: "/images/2023/06/BTC-Softwares.webp", alt: "BTC Software" },
    { src: "/images/2023/06/Croydon-Chamber.webp", alt: "Croydon Chamber" },
    { src: "/images/2023/06/Croydon.webp", alt: "Croydon Council" },
    { src: "/images/2023/06/Dext.webp", alt: "Dext" },
    { src: "/images/2023/06/Go-Cardless.webp", alt: "GoCardless" },
    { src: "/images/2023/06/Intuit-Quick-Books.webp", alt: "Intuit QuickBooks" },
    { src: "/images/2023/06/Lewisham.webp", alt: "Lewisham Council" },
    { src: "/images/2023/06/Simply-Business.webp", alt: "Simply Business" },
    { src: "/images/2023/06/SME-News.webp", alt: "SME News" },
    { src: "/images/2023/06/TAXCALC-1.webp", alt: "TaxCalc" },
    { src: "/images/2023/06/Three-Best-Rated.webp", alt: "Three Best Rated" },
    { src: "/images/2023/06/VT-Software.webp", alt: "VT Software" },
    { src: "/images/2023/06/XERO-1.webp", alt: "XERO" },
    { src: "/images/2023/06/Xpert-SM.webp", alt: "Xpert SM" },
  ];

  return (
    <section className="py-5">
        <div className="container">
            <div className="text-center max-w-xl mx-auto mb-5">
                <div className="flex justify-center">
                    <h4 className="mt-2 text-brand-dark display-5 whitespace-nowrap">Our Clients and Collaborative Partners</h4>
                </div>
                <div className="bg-brand-orange mx-auto my-3" style={{ width: "80px", height: "3px" }}></div>
                <p className="text-secondary lead fs-6">Trusted by leading organizations and industry experts.</p>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
            >
                {partners.map((partner, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
                        <img 
                            src={partner.src} 
                            alt={partner.alt} 
                            style={{ maxWidth: "120px", height: "auto" }} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  );
};

export default Partners;
