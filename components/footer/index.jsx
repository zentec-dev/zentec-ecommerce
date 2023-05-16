import Link from "next/link";
import Button from "../button";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={`${style["footer__redes"]}`}>
        <Link href="https://www.instagram.com/somoszentec/">
          <a>
            <Button type="link">
              <img src="/img/icon-instagram.svg" alt="instagram Zentec" />
            </Button>
          </a>
        </Link>
        <Link href="https://www.facebook.com/Somos-Zentec-111245983941665/">
          <a>
            <Button type="link">
              <img src="/img/icon-facebook.svg" alt="facebook Zentec" />
            </Button>
          </a>
        </Link>
      </div>

      <Link className={`${style["footer__box-logo"]}`} href="/index.html">
        <a>
          <img
            className="logo"
            src="/img/zentec-logo-brown.svg"
            alt="Logo Zentec"
          />
        </a>
      </Link>
      <span className={`${style["footer__line"]}`}></span>

      <p className={`${style["footer__p"]}`}>
        Copyright ©2023 Zentec, Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
