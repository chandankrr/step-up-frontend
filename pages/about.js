import Wrapper from '@/components/Wrapper';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            About Us
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center">
            <Image
              src="/about-us_banner.jpg"
              alt="About Us"
              width={1240}
              height={400}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-700 mb-6 mt-10">
            Step Up is your ultimate destination for stylish and comfortable
            shoes. We believe that the right pair of shoes can elevate your
            confidence and take you to new heights. Our mission is to provide
            top-quality footwear that not only looks great but also feels great
            on your feet.
          </p>
          <p className="text-gray-700 mb-6">
            At Step Up, we carefully curate our collection to offer the latest
            trends and timeless classics. Whether you're looking for sneakers,
            boots, sandals, or heels, we have something for everyone. Our shoes
            are crafted with precision and made from the finest materials to
            ensure durability and long-lasting comfort.
          </p>
          <p className="text-gray-700 mb-6">
            We take pride in delivering excellent customer service and a
            seamless shopping experience. Our team of shoe enthusiasts is always
            ready to assist you in finding the perfect pair that matches your
            style and fits your needs.
          </p>
          <p className="text-gray-700 mb-6">
            Sustainability is a core value at Step Up. We strive to minimize our
            environmental impact by using eco-friendly packaging and supporting
            ethical manufacturing practices. With every purchase, you join us in
            taking a step towards a greener future.
          </p>
          <p className="text-gray-700">
            Thank you for choosing Step Up as your go-to shoe store. We look
            forward to helping you step up your style game and walk with
            confidence every day.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
