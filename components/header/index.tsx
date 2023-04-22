"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import style from "./header.module.scss";

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
        <Link href="/" className="header-nav__box__item">
          Home
        </Link>
        <Link href="/" className="header-nav__box__item">
          ¿Quiénes somos?
        </Link>
      </div>
      <Link className="header-nav__logo-box" href="/">
        <img
          className="header-nav__logo"
          src="/img/zentec-logo.svg"
          alt="Logo Zentec"
        />
      </Link>
      <div className="header-nav__box">
        <Link href="/products" className="header-nav__box__item">
          Productos
        </Link>
        <Link href="/" className="header-nav__box__item">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Header;
