import React from 'react';

const Nav = () => {
  return (
    <nav className="h-[100px] bg-primary max-[1023px]:hidden">
      <ul className="mx-auto flex h-[100%] w-[600px] items-center justify-between">
        <li>
          <a
            className="font-paragraph text-xl text-one hover:text-four duration-300"
            href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className="font-paragraph text-xl text-one hover:text-four duration-300"
            href="#products">
            Productos
          </a>
        </li>
        <li>
          <a
            className="font-paragraph text-xl text-one hover:text-four duration-300"
            href="#about">
            Sobre mi
          </a>
        </li>
        <li>
          <a
            className="font-paragraph text-xl text-one hover:text-four duration-300"
            href="#contact">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
