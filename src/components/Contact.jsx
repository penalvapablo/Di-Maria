import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="bg-four" id="contact">
      <h2 className="text-three text-6xl font-title text-center pt-12 pb-6 font-bold">
        Contact
      </h2>
      <div className="mx-auto mb-[50px] flex h-[150px] w-fit flex-col items-start justify-around">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-[40px] justify-items-end text-end text-three"
          />
          <p className="font-paragraph text-xl font-semibold text-three">
            +447533726042
          </p>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-[40px] justify-items-end text-end text-three"
          />
          <button className="font-paragraph text-xl font-semibold text-three ">
            <a
              href="https://api.whatsapp.com/send?phone=491785279833"
              rel="noreferrer"
              target="_blank"
              className="duration-100 hover:text-[20px]"
            >
              +447533726042
            </a>
          </button>
        </div>
      </div>
      <p className="text-three text-center font-paragraph">Todos los derechos reservados 2022  - D’ María</p>
    </section>
  );
};

export default Contact;
