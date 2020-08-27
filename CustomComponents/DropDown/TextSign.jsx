import styles from "./scss/dropdown.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TextSign = ({ topText, show }) => {
  if (topText) {
    return (
      <div
        className={cx("move", {
          "move--up": show,
          "move--down": show !== null ? !show : false,
        })}
      >
        {<span>{topText}</span>}
      </div>
    );
  }
  return null;
};

export default TextSign;
