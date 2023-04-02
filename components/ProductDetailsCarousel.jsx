/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="Product Image" />
        <img src="/p2.png" alt="Product Image" />
        <img src="/p3.png" alt="Product Image" />
        <img src="/p4.png" alt="Product Image" />
        <img src="/p5.png" alt="Product Image" />
        <img src="/p6.png" alt="Product Image" />
        <img src="/p7.png" alt="Product Image" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;