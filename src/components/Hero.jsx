import React, { useState } from 'react';
import Header from './Header';

const Hero = () => {
  const [heroTextBox, setHeroTextBox] = useState(true);
  const heroTextBoxFn = () => {
    setHeroTextBox(!heroTextBox);
  };

  return (
    <div className="h-screen w-[100%] relative sm:h-[900px] bg-[url('src/Assets/Hero-mobile.jpg')] ">
      <Header heroTextBoxFn={heroTextBoxFn} />
      {heroTextBox && (
        <div className="">
          <div className="absolute top-[20%] left-1/2 translate-x-[-50%] w-[350px] sm:hidden">
            <img src="/src/Assets/Logo-mobile.svg" />
          </div>
          <div className="max-[640px]:hidden absolute top-[20%] left-1/2 translate-x-[-50%] w-[450px]">
            <img src="/src/Assets/Logo-desktop.svg" />
          </div>
          <p className=" absolute top-[75%] left-1/2 text-one translate-x-[-50%] font-paragraph text-2xl text-center w-[300px] sm:w-[400px] sm:text-3xl">
            Deliciosos sabores de la tierra, hechos con
            cariño por María.
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
