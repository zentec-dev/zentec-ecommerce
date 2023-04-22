import style from "./button.module.scss";

interface ButtonProps {
  size?: string;
  type?: string;
  label?: string;
  children?: React.ReactNode;
  disabled?: true;
}

const Button = ({ size, type, label, children, disabled }: ButtonProps) => {
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
