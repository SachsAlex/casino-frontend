import styles from "./Button.module.css";

interface BtnProps {
  onClick: () => void;
  text: string;
  className: string;
  id: string; // Nummern werden immer als String eingelesen, auch wenn sie als Number eingegeben werden
}

function Button({ onClick, text, className, id }: BtnProps) {
  return (
    <div id={id} className={`${styles.myBtn} ${className}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
