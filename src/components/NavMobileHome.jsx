const NavMobile = ({ mobileNavFn }) => {
  return (
    <nav className="h-screen flex items-center justify-center ">
      <ul className="h-[100%] max-h-[300px] flex flex-col items-center text-center justify-around">
        <li>
          <a
            className="text-one text-2xl tracking-wider font-title  font-bold text-navLinks"
            href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className="text-one text-2xl tracking-wider font-title  font-bold text-navLinks "
            href="#products"
            onClick={mobileNavFn}>
            Productos
          </a>
        </li>
        <li>
          <a
            className="text-one text-2xl tracking-wider font-title  font-bold text-navLinks "
            href="#about"
            onClick={mobileNavFn}>
            {' '}
            Sobre Mi
          </a>
        </li>
        <li>
          <a
            className="text-one text-2xl tracking-wider font-title  font-bold text-navLinks "
            href="#contacto"
            onClick={mobileNavFn}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
