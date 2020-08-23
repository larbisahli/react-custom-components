import styles from "./scss/dropdown.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const TextSign = ({ topText, show }) => {
  if (topText) {
    return (
      <div className={cx("move", { "move--up": show, "move--down": !show })}>
        {<div className={cx("")}>{topText}</div>}
      </div>
    );
  }
  return null;
};

export default TextSign;
