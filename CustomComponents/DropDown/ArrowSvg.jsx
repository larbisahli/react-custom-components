import styles from "./scss/dropdown.module.scss";
import classNames from "classnames/bind";
let cx = classNames.bind(styles);

const ArrowSvg = ({ rotate }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3 3 10 10"
      className={cx("arrowicon", { rotate: rotate })}
    >
      <path
        fill="#fff"
        d="M10.146 7.146a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 
              0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L8 9.293l2.146-2.147z"
      ></path>
    </svg>
  );
};

export default ArrowSvg;
