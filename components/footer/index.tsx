import Button from "../button";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <div className={`${style["footer__redes"]}`}>
        <a href="https://www.instagram.com/somoszentec/">
          <Button type="link">
            <img src="/img/icon-instagram.svg" alt="instagram Zentec" />
          </Button>
        </a>
        <a href="https://www.facebook.com/Somos-Zentec-111245983941665/">
          <Button type="link">
            <img src="/img/icon-facebook.svg" alt="facebook Zentec" />
          </Button>
        </a>
      </div>

      <a className={`${style["footer__box-logo"]}`} href="/index.html">
        <img
          className="logo"
          src="/img/zentec-logo-brown.svg"
          alt="Logo Zentec"
        />
      </a>
      <span className={`${style["footer__line"]}`}></span>

      <p className={`${style["footer__p"]}`}>
        Copyright ©2023 Zentec, Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
