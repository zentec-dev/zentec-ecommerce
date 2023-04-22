import style from "./layout.module.scss";

const Loading = () => {
  return (
    <div className={style["loading"]}>
      <div className={style["spin-loader-parent"]}>
        <span className={style["spin-loader"]}></span>
      </div>
      <p>Cargando productos...</p>
    </div>
  );
};

export default Loading;
