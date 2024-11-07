import css from "./Button.module.css";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      type="submit"
      className={`${css.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
