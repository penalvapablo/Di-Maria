import React, { useState } from 'react';
import Header from './Header';

const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true);
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox);
  };

  return (
    <div
      className="h-screen relative lg:h-[750px] landscape:h-[750px]
      bg-[url('src/Assets/Hero-mobile.jpg')] lg:bg-[url('src/Assets/Hero-desktop.jpg')]  
      bg-cover bg-center bg-no-repeat ">
      <Header heroTextBoxFn={heroTextBoxFn} />
      {heroTextBox && (
        <div className="">
          <div className="absolute top-[20%] left-1/2 translate-x-[-50%] w-[350px] md:hidden">
            <img src="/src/Assets/Logo-mobile.svg" />
          </div>
          <div className="max-[768px]:hidden absolute top-[20%] left-1/2 translate-x-[-50%] w-[450px]">
            <img src="/src/Assets/Logo-desktop.svg" />
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
