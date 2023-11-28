import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavMobile = ({ mobileNavFn }) => {
  return (
    <nav className="h-[100dvh] w-full bg-five flex items-center justify-center absolute z-10">
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
      <ul className="h-[100%] max-h-[300px] flex flex-col items-center text-center justify-around">
        <li>
          <a
            className="text-one text-xl tracking-wider font-paragraph text-navLinks"
            href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className="text-one text-xl tracking-wider font-paragraph text-navLinks "
            href="#products"
            onClick={mobileNavFn}>
            Productos
          </a>
        </li>
        <li>
          <a
            className="text-one text-xl tracking-wider font-paragraph text-navLinks "
            href="#about"
            onClick={mobileNavFn}>
            {' '}
            Sobre Mi
          </a>
        </li>
        <li>
          <a
            className="text-one text-xl tracking-wider font-paragraph text-navLinks "
            href="#contact"
            onClick={mobileNavFn}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
