import style from "./button.module.scss";

const Button = ({ size, type, label, children, disabled }) => {
  const classes = [
    style.btn,
    size && style[`btn-${size}`],
    type && style[`btn-${type}`],
    disabled && style[`btn-${disabled}`],
  ].join(" ");

  return (
    <button className={classes}>
      {label}
      {children}
    </button>
  );
};

export default Button;
