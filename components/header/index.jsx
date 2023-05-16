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
        <Link href="#home" className="header-nav__box__item">
          <a>Home</a>
        </Link>
        <Link href="#quienes-somos" className="header-nav__box__item">
          <a>¿Quiénes somos?</a>
        </Link>
      </div>
      <Link className="header-nav__logo-box" href="/">
        <a>
          <img
            className="header-nav__logo"
            src="/img/zentec-logo.svg"
            alt="Logo Zentec"
          />
        </a>
      </Link>
      <div className="header-nav__box">
        <Link href="/products" className="header-nav__box__item">
          <a>Productos</a>
        </Link>
        <Link href="#contactar" className="header-nav__box__item">
          <a>Contacto</a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
