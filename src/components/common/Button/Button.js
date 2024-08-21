import style from "./button.module.scss";

const Button = ({ isPing, text, onClick, type }) => {
  return (
    <button
      className={
        isPing
          ? `${style.button} ${style.buttonPing}`
          : `${style.button} ${style.buttonBorder}`
      }
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
