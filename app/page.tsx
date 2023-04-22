import Button from "@/components/button";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1 className="header__title heading animateJs-1 ml7">
          <span id="spanWrapperTittle" className="text-wrapper">
            <span className="letters">
              Todo lo que necesitas en tecnología LED al alcance de tus manos
            </span>
          </span>
        </h1>

        <div className="header__cta">
          <Button size="big" label="Ver productos" />
          <Button type="boderline" label="Coctactar" />
        </div>

        <div className="header__box-img">
          <img
            className="header__box-img__item"
            src="img/photo_header.png"
            alt="Zentec producto1"
          />
        </div>
      </header>

      <section id="about-us" className="about-us">
        <h2 className="about-us__title heading heading--big-2 text-center">
          ¿Quiénes somos?
        </h2>

        <div className="about-us__box">
          <h6 className="heading heading--medium heading--medium--color-sec">
            La Familia Zentec es tu mejor aliado para el hogar
          </h6>
          <p className="margin-top-2rem">
            Nuestro compromiso es brindarle soluciones, respaldo y calidad a
            través de nuestros productos. El objetivo es iluminar cada rincón de
            Venezuela, por eso contarás con una amplia variedad de productos
            eléctricos con distribución a nivel nacional.
          </p>
        </div>
        <img
          className="about-us__img"
          src="/img/product-quienes-somos.png"
          alt="Zentec lámparas"
        />
        {/*  <Button type="boderline" label="Coctactar" /> */}
      </section>

      <section id="home-products" className="home-products">
        <div className="home-products__box">
          <h2 className="home-products__title heading heading--big-2 text-center">
            Productos
          </h2>
          <div className="parent-card-home">
            <div className="card-home">
              <img
                className="icon"
                src="/img/cables-01.svg"
                alt="Zentec Logo"
              />
              <h6 className="heading heading--small">Cables</h6>
              <p className="paragraph">
                El secreto de una buena conexión e instalación es tener
                productos de primera. En Zentec contamos con cables AWG, THW y
                SPT 100% cobre de producción nacional.
              </p>
              <a href="/products/index.html">
                <button className="btn btn-big text-center">
                  Ver productos
                </button>
              </a>
            </div>

            <div className="card-home">
              <img
                className="icon"
                src="/img/bombillo-01.svg"
                alt="Zentec Logo"
              />
              <h6 className="heading heading--small">Iluminación</h6>
              <p className="paragraph">
                Disponemos de una amplia gama de bombillos y lámparas con la
                mejor tecnología LED ¡Tenemos lo que buscas!
              </p>
              <a href="/products/index.html">
                <button className="btn btn-big text-center">
                  Ver productos
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2 className="contact__title heading heading--big-2 text-center">
          ¿Buscas algo?
        </h2>
        <p className="contact__p">
          Escríbenos y nos pondremos en contacto lo más pronto posible.
        </p>

        <div className="contact__number">
          <span className="paragraph--4rem">+58 (241) 814 29 13 /</span>
          <span className="paragraph--4rem">+58 (414) 018 08 38</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
