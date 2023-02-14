import React, { useState } from 'react';
import NavMobile from './NavMobileHome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';

const Header = ({ heroTextBoxFn }) => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    setMobileNav(!mobileNav);
    if (heroTextBoxFn != null) {
      heroTextBoxFn();
    }
  };
  // Preven scrolling when mobile nav activated
  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }
  return (
    <>
      <div className="relative z-10 lg:hidden">
        <div
          id="burger"
          className="absolute top-7 right-10">
          <button
            id="burger menu"
            aria-label="burger menu"
            onClick={mobileNavFn}>
            <FontAwesomeIcon
              icon={faBars}
              className="h-[35px] w-[35px] text-three text-end justify-items-end bg-one p-3 rounded-full"
            />
          </button>
        </div>
      </div>
      {mobileNav && (
        <NavMobile
          mobileNav={mobileNav}
          mobileNavFn={mobileNavFn}
        />
      )}
      <Nav />
    </>
  );
};

export default Header;
