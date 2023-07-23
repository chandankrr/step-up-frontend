import Wrapper from '@/components/Wrapper';
import React from 'react';

const Contact = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Contact Us
          </div>
          <div className="bg-white p-4 ">
            <p className="text-lg">
              <strong>Step Up Shoes Store</strong>
            </p>
            <p>Address: 123 Shoe Street, City, Country</p>
            <p>Email: info@stepupshoes.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Contact;
