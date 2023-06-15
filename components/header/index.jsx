"use client";
import { useCallback, useEffect, useState } from "react";
import style from "./header.module.scss";
import Link from "next/link";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(() => {
    const { pageYOffset } = window;
    setScrollY(pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const isScrolling = scrollY > 5;

  return (
    <nav
      className={
        isScrolling ? `header-nav ${style["nav--scroll"]}` : "header-nav"
      }
    >
      <div className="header-nav__box">
        <Link href="/#home">
          <a className="header-nav__box__item">Home</a>
        </Link>
        <Link href="/#quienes-somos">
          <a className="header-nav__box__item">¿Quiénes somos?</a>
        </Link>
      </div>
      <Link href="/">
        <a className="header-nav__logo-box">
          <img
            className="header-nav__logo"
            src="/img/zentec-logo.svg"
            alt="Logo Zentec"
          />
        </a>
      </Link>
      <div className="header-nav__box">
        <Link href="/products">
          <a className="header-nav__box__item">Productos</a>
        </Link>
        <Link href="/#contactar">
          <a className="header-nav__box__item">Contacto</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
