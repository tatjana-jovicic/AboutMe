import "./styles/Button.css";

const Button = ({ buttonText, additionalClass, onclick }) => {
  return (
    <button onClick={onclick} className={`${additionalClass} button`}>
      {buttonText}
    </button>
  );
};
export default Button;
