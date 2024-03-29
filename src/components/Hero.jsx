import React, { useState } from 'react';
import Header from './Header';
import logoMobile from '../Assets/Logo-mobile.svg';
import logoDesktop from '../Assets/Logo-desktop.svg';


const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true);
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox);
  };

  return (
    <div
      className="h-[700px] min-h-[600px] relative lg:h-[700px] bg-[url('/Hero-mobile.jpg')] lg:bg-[url('/Hero-desktop.jpg')]  
      bg-cover bg-center bg-no-repeat ">
      {/* <Image /> */}
      <Header heroTextBoxFn={heroTextBoxFn} />
      {heroTextBox && (
        <div className="">
          <div className="absolute top-[20%] left-1/2 translate-x-[-50%] w-[350px] md:hidden">
            <img
              src={logoMobile}
              alt="Logo Mobile Vie"
              width={350}
              height={350}
            />
          </div>
          <div className="max-[767px]:hidden absolute top-[20%] left-1/2 translate-x-[-50%] w-[450px]">
            <img
              src={logoDesktop}
              alt="Logo Desktop View"
              width={450}
              height={450}
            />
          </div>
          <p className=" absolute top-[75%] left-1/2 text-one translate-x-[-50%] font-paragraph font-normal text-2xl text-center w-[300px] sm:w-[400px] landscape:top-[85%] md:top-[85%]">
            Deliciosos sabores de la tierra, hechos con
            cariño por María.
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
